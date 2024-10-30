import axios from "axios";

const token = localStorage.getItem('token')

export const adminAxios = axios.create({
    baseURL:'http://localhost:3000',
    headers:{
        'Authorization': token || ""
    }
})