import axios from 'axios';
const BASE_URL='http://localhost:8000';
export default axios.create({
    baseURL:      BASE_URL       //backend
});

export const axiosPrivate= axios.create({
    baseURL: BASE_URL ,          //backend
    headers: {'Content-Type':'applicatoin/json'},
    withCredentials:true


});