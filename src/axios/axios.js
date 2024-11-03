import axios from "axios";

const token = localStorage.getItem('token')

console.log(" api ",import.meta.env.API)
export const adminAxios = axios.create({
    baseURL: "https://geekstack-admin.onrender.com",
    headers:{
        'Authorization': token || ""
    }
})