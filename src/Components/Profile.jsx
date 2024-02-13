import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap'
import profilepicblank from '../assets/profilepicblank.png'
import SERVER_URL from '../services/serverUrl'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUserProfileAPI } from '../services/allAPI';

function Profile() {
  //for profile there are total of 3 diff states
  const [userData, setUserData] = useState({
    username: "", email: "", password: "", github: "", linkedin: "", profileImage: ""
  })   //profileimage from userData state holds only the uploading file
  const [existingImage, setExistingImage] = useState("")   //this state holds existing image( existing image not necessary)
  const [preview, setPreview] = useState("")       //this state holds only the url of the uploading image

  useEffect(() => {
    if (sessionStorage.getItem("userDetails")) {
      const userDetails = JSON.parse(sessionStorage.getItem("userDetails"))
      setUserData({ ...userData, username: userDetails.username, email: userDetails.email, password: userDetails.password, github: userDetails.github, linkedin: userDetails.linkedin })
      setExistingImage(userDetails.profile)
    }
  }, [])
  useEffect(() => {
    if (userData.profileImage) {
      setPreview(URL.createObjectURL(userData.profileImage))
    } else {
      setPreview("")
    }
  }, [userData.profileImage])
  console.log(userData);

  const handleProfileUpdate = async () => {
    const { username, email, password, github, linkedin, profileImage } = userData
    if (!github || !linkedin) {
      toast.info("Please fill the form Completely!!!")
    }
    else {
      //proceed to api call
      const reqBody = new FormData()
      reqBody.append("username", username)
      reqBody.append("email", email)
      reqBody.append("password", password)
      reqBody.append("github", github)
      reqBody.append("linkedin", linkedin)
      preview ? reqBody.append("profileImage", profileImage) : reqBody.append("profileImage", existingImage)

      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type": preview ? "multipart/form-data" : "application/json",
          "Authorization": `Bearer ${token}`
        }
        //api call here
        try {
          const result = await updateUserProfileAPI(reqBody, reqHeader)
          if (result.status == 200) {              
              sessionStorage.setItem("userDetails",JSON.stringify(result.data))
            toast.success("Updated Successfully!!!")
          } else {
            console.log(result);
          }

        }
        catch {

        }
      }

    }
  }


  return (

    <>
      <Accordion className=' shadow rounded m-3' defaultActiveKey="0">
        <Accordion.Item >
          <Accordion.Header> <h2>Profile</h2></Accordion.Header>
          <Accordion.Body>
            <div className='text-center' id="example-collapse-text">

              <label style={{ cursor: 'pointer' }}>
                <input type="file" style={{ display: 'none' }} onChange={e => { setUserData({ ...userData, profileImage: e.target.files[0] }) }} />
                {existingImage == "" ?
                  <img className='img-fluid rounded-circle' width={'200px'} src={preview ? preview : profilepicblank} alt="Upload Profile Pic" />
                  :
                  <img className='img-fluid rounded-circle' width={'200px'} src={preview ? preview : `${SERVER_URL}/uploads/${existingImage}`} alt="Upload Profile Pic" />
                }
              </label>

              <div>
                <input type="text" className='form-control border-black container w-75 mb-3 text-center' placeholder='Enter your Github Link Here' onChange={e => { setUserData({ ...userData, github: e.target.value }) }} value={userData.github} />
                <input type="text" className='form-control border-black container w-75 mb-3 text-center' placeholder='Enter your Linkedin Link Here' onChange={e => { setUserData({ ...userData, linkedin: e.target.value }) }} value={userData.linkedin} />
                <button onClick={handleProfileUpdate} className='btn btn-warning mb-3'>Update</button>
              </div>

            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <ToastContainer autoClose={4000} theme='colored'></ToastContainer>

    </>


  )
}

export default Profile