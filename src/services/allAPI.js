import { commonAPI } from "./commonAPI"
import SERVER_URL from "./serverUrl"

//register api
export const registerAPI=async(user)=>{
  return await commonAPI("POST",`${SERVER_URL}/register`,user,"")
}
//login api
export const loginAPI=async(user)=>{
  return await commonAPI("POST",`${SERVER_URL}/login`,user,"")
}

//add project api
export const addProjectAPI=async(reqBody,reqHeader)=>{
  return await commonAPI("POST",`${SERVER_URL}/add-project`,reqBody,reqHeader)
}

//get home project api
export const getHomeProjectAPI=async()=>{
  return await commonAPI("GET",`${SERVER_URL}/get-home-project`,"","")
}

//get all project api
export const getAllProjectAPI=async(searchKey,reqHeader)=>{
  return await commonAPI("GET",`${SERVER_URL}/get-all-project?search=${searchKey}`,"",reqHeader)
}

//get user project api
export const getUserProjectAPI=async(reqHeader)=>{
  return await commonAPI("GET",`${SERVER_URL}/get-user-project`,"",reqHeader)
}
//  user/edit api
export const updateUserProfileAPI=async(reqBody,reqHeader)=>{
  return await commonAPI("PUT",`${SERVER_URL}/user/edit`,reqBody,reqHeader)
}
//  project/edit api
export const updateProjectAPI=async(projectId,reqBody,reqHeader)=>{
  return await commonAPI("PUT",`${SERVER_URL}/project/edit/${projectId}`,reqBody,reqHeader)
}
//  remove-project api
export const deleteProjectAPI=async(projectId,reqHeader)=>{
  return await commonAPI("DELETE",`${SERVER_URL}/remove-project/${projectId}`,{},reqHeader) //body should be empty object
}