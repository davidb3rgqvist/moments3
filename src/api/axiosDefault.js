import axios from "axios";

axios.defaults.baseURL = 'https://drf-be-3512290af8c0.herokuapp.com/'
axios.defaults.headers.post['Content-Type']= 'multipart/form-data'
axios.defaults.withCredentials = true;