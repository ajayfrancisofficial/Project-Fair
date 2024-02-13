import axios from "axios"

export const commonAPI=async(httpRequest,url,reqBody,reqHeader)=>{
    const reqConfig={
        method:httpRequest,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"} //this should be like this!! can be copied from postman req header

    }
    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((reason)=>{
        return reason
    } 
)
}