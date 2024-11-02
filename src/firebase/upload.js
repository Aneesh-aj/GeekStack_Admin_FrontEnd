import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { firebaseDB } from "./config"
import {v4} from "uuid"



export const uploadImages = async (image)=>{
    console.log(" the image  from the upload" , image)
    const imageRef = ref(firebaseDB,`/geekStack/image/${v4()+image.name}`)
    if(image){
        try{
            console.log("-----------1")
            await uploadBytes(imageRef,image)
            console.log("------------------2")
            const downloeadUrl = await getDownloadURL(imageRef)
            console.log(" --------------3")
            return downloeadUrl
        }catch(error){
            console.log(" 0000",error)
            throw error
        }
    }
}