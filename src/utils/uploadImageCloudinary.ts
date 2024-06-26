// const upload_preset=import.meta.env.VITE_UPLOAD_PRESET;
// const cloud_name=import.meta.env.VITE_UPLOAD_CLOUD_NAME;
const  uploadImageCloudinary = async (file: string | Blob)=>{

    const  uploadData=new FormData()
    uploadData.append('file',file)
    uploadData.append('upload_preset','doctor-booking-system-2')
    uploadData.append('cloud_name','delmbpise')


    const response= await fetch(`https://api.cloudinary.com/v1_1/delmbpise/image/upload`,{
        method:'post',
        body:uploadData
    })

    const data=response.json()

    return data

    /* const response= await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,uploadData)
     return response;*/
}

export default uploadImageCloudinary;