import json
import numpy as np
import cv2
import base64

net = cv2.dnn.readNet('detection/yolov4.weights', 'detection/yolov4.cfg')
classes = ['Plate', 'Face']
layer_names = net.getLayerNames()
output_layers = [layer_names[i[0] - 1] for i in net.getUnconnectedOutLayers()]

def detection(img, labelDetect):

    height, width, _ = img.shape

    blob = cv2.dnn.blobFromImage(img, 0.00392, (416, 416), (0, 0, 0), True, crop=False)

    net.setInput(blob)
    outs = net.forward(output_layers)

    class_ids = []
    confidences = []
    boxes = []
    for out in outs:
        for detection in out:
            scores = detection[5:]
            class_id = np.argmax(scores)
            confidence = scores[class_id]
            if confidence > 0.3:
                center_x = int(detection[0] * width)
                center_y = int(detection[1] * height)
                w = int(detection[2] * width)
                h = int(detection[3] * height)
                x = int(center_x - w / 2)
                y = int(center_y - h / 2)
                boxes.append([x, y, w, h])
                confidences.append(float(confidence))
                class_ids.append(class_id)

    indexes = cv2.dnn.NMSBoxes(boxes, confidences, 0.5, 0.4)

    biggest = 0
    boxes_biggest = 0
    label_biggest = ''

    for i in range(len(boxes)):
        if i in indexes:
            x, y, w, h = boxes[i]
            size = w * h
            label = str(classes[class_ids[i]])
            if size > biggest and labelDetect == label:
                biggest = size
                boxes_biggest = boxes[i]
                label_biggest = label

    if label_biggest != '':
        x, y, w, h = boxes_biggest
        crop_img = img[y-25:y+h+25, x-25:x+w+25]
        return crop_img, label
    else:
        return '', ''

def base64decode(img):
    imgData = base64.b64decode(img[23:])
    bufArr = np.frombuffer(imgData, dtype=np.uint8)
    image = cv2.imdecode(bufArr, cv2.IMREAD_UNCHANGED)
    return image

def base64encode(img):
    _, bufArr = cv2.imencode('.jpeg', img)
    bytes = bufArr.tobytes()
    imgData = base64.b64encode(bytes)
    return imgData

def main():
    while True:
        jsonFile = input()
        images = json.loads(jsonFile)
        plateFlag = False
        faceFlag = False
        plate = images['plate']
        face = images['face']
        plate = base64decode(plate)
        face = base64decode(face)
        plate, plateLabel = detection(plate, 'Plate')
        face, faceLabel = detection(face, 'Face')
        if plateLabel == 'Plate':
            try:
                plate = base64encode(plate)
                plateFlag = True
            except:
                pass
        if faceLabel == 'Face':
            try:
                face = base64encode(face)
                faceFlag = True
            except:
                pass

        if plateFlag == True:
            plate = str(plate)
            plate = plate[2:]
            plate = plate[:-1]
        if faceFlag == True:
            face = str(face)
            face = face[2:]
            face = face[:-1]

        if plateFlag == True and faceFlag == False:
            print(json.dumps({ 'plate': plate, 'face': False }))
        elif plateFlag == False and faceFlag == True:
            print(json.dumps({ 'plate': False, 'face': face }))
        elif plateFlag == False and faceFlag == False:
            print(json.dumps({ 'plate': False, 'face': False }))
        else:
            print(json.dumps({ 'plate': plate, 'face': face }))
main()
