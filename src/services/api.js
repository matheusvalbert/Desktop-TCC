import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjIxNDQ2MjI0fQ.D-rSDm_Uu3csrneiA-qBaK81bO_HryPJP55ki_p26hY'}
});

export default api;
