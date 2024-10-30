import { adminAxios } from "../axios/axios"


export const adminLoginHandler= async(data)=>{
    const res = await adminAxios.post("/auth/login",data)
    return res.data
}

export const submitBusinessData = async()=>{
    const res = await adminAxios.post("/admin/businessData-submition")
}

