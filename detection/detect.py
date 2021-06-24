from flask import Flask, request
from flask_cors import CORS
import numpy as np
import cv2
import base64

net = cv2.dnn.readNet('detection/yolov4.weights', 'detection/yolov4.cfg')

classes = ['Plate', 'Face']

layer_names = net.getLayerNames()
output_layers = [layer_names[i[0] - 1] for i in net.getUnconnectedOutLayers()]
color = (255,255,255)

def detection(img, labelDetect):

    height, width, channels = img.shape

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
                w = int(detection[2] * width * 1.5)
                h = int(detection[3] * height * 1.5)
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
        crop_img = img[y:y+h, x:x+w]
        return crop_img, label
    else:
        return '', ''

def base64decode(img):
    imgData = base64.b64decode(img[23:])
    bufArr = np.frombuffer(imgData, dtype=np.uint8)
    image = cv2.imdecode(bufArr, cv2.IMREAD_UNCHANGED)
    return image

def base64encode(img):
    _, bufArr = cv2.imencode('.jpg', img)
    bytes = bufArr.tobytes()
    imgData = base64.b64encode(bytes)
    return imgData

app = Flask(__name__)
cors = CORS(app)

@app.route('/images', methods=['POST'])
def images():
    flagOne = False
    flagTwo = False
    imgOne = request.get_json().get('imgOne')
    imgTwo = request.get_json().get('imgTwo')
    imgOne = base64decode(imgOne)
    imgTwo = base64decode(imgTwo)
    imgOne, labelOne = detection(imgOne, 'Plate')
    imgTwo, labelTwo = detection(imgTwo, 'Face')
    if labelOne == 'Plate':
        try:
            imgOne = base64encode(imgOne)
            flagOne = True
        except:
            pass
    if labelTwo == 'Face':
        try:
            imgTwo = base64encode(imgTwo)
            flagTwo = True
        except:
            pass

    if flagOne == True:
        imgOne = str(imgOne)
        imgOne = imgOne[2:]
        imgOne = imgOne[:-1]
    if flagTwo == True:
        imgTwo = str(imgTwo)
        imgTwo = imgTwo[2:]
        imgTwo = imgTwo[:-1]

    if flagOne == True and flagTwo == False:
        return { 'imgOne': imgOne, 'imgTwo': False }
    elif flagOne == False and flagTwo == True:
        return { 'imgOne': False, 'imgTwo': imgTwo }
    elif flagOne == False and flagTwo == False:
        return { 'imgOne': False, 'imgTwo': False }
    else:
        return { 'imgOne': imgOne, 'imgTwo': imgTwo }

app.run(host='localhost', port=5000)
