import axios from 'axios';

const request = axios.create({
  baseURL: 'https://infinite-dawn-93085.herokuapp.com'
});

export default request;