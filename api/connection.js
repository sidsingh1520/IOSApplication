import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://careerkickbackendapi.herokuapp.com',
});

export default instance;