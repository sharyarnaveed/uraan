import {v2 as cloudinary} from "cloudinary";
import fs from "fs"



cloudinary.config({
    cloud_name:`${process.env.CLOUD_CLOUDNAME}`,
    api_key:`${process.env.CLOUD_API_KEY}`,
    api_secret:`${process.env.CLOUDINARY_API_SECRET}`
})


const uploadoncloud=async(filepath)=>
{
    console.log("file path in cloud",filepath);

    console.log(process.env.CLOUDINARY_API_SECRET);
    try {
        if (!filepath) {
            console.log("file path doesnot exisit");
            return null
        }
        else{
      const responce= await  cloudinary.uploader.upload(filepath,{
                resource_type:"auto"
            })
            console.log("file is uploaded",responce);
            console.log(responce.url);
        }
    } catch (error) {
        console.log("error in cloudniary",error);
    }
}



export {uploadoncloud}