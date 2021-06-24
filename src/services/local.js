import axios from 'axios';

const local = axios.create({
  baseURL: 'http://localhost:5000'
})

export default local;
