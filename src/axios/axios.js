import axios from "axios";

const token = localStorage.getItem('token')

export const adminAxios = axios.create({
    baseURL:import.meta.env.API,
    headers:{
        'Authorization': token || ""
    }
})