import { adminAxios } from "../axios/axios"
import { uploadImages } from "../firebase/upload";


export const adminLoginHandler = async (data) => {
    try {
        const res = await adminAxios.post("/auth/login", data)
        return res.data
    } catch (error) {
        return error
    }
}


export const createAds = async (data) => {
    console.log("Data from the form: ", data);

    const upload = async (file) => {
        try {
            const img = await uploadImages(file);
            return img;
        } catch (error) {
            console.error("Error uploading image: ", error, file);
            throw error;
        }
    };

    const uploadPromises = data.images.map(upload);

    try {
        const uploadedImages = await Promise.all(uploadPromises);
        data.images = uploadedImages;
        console.log("After the data: ", data);

        const res = await adminAxios.post("/admin/createAds", data);
        return res.data
    } catch (error) {
        console.error("Error uploading images: ", error);
        return error
    }
};




export const createBusiness = async (formData) => {
    try {
        console.log(" i am ehere")
        console.log(" the datas are here", formData)

        const res = await adminAxios.post("/admin/createBusiness", formData)
        return res.data
    } catch (error) {
        return error
    }
}

export const createBadge = async (data) => {
    try {
        console.log(data)
        const res = await adminAxios.post("/admin/createBadge", data)
        return res.data
    } catch (error) {
        return error
    }
}


export const createCategory = async (data) => {
    const res = await adminAxios.post("/admin/createCategory", data)
    return res.data
}

export const getAllCategory = async () => {
    const res = await adminAxios.get("/admin/getAllCategory")
    return res.data
}


export const getAllBadges = async () => {
    const res = await adminAxios.get("/admin/getAllBadge")
    return res.data
}


export const getAllBusiness = async () => {
    const res = await adminAxios.get("/admin/getAllBusiness")
    return res.data
}

export const getAllBusinessDetails = async () => {
    const res = await adminAxios.get("/admin/getAllBusinessDetails")
    return res.data
}


export const getAllAdsDetails = async () => {
    const res = await adminAxios.get("/admin/getAllAdsDetails")
    return res.data
}