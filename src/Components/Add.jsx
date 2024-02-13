import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';
import projectUploadPic from '../assets/projectUploadPic.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectAPI } from '../services/allAPI';
import { addResponseContext } from '../Context/ContextShare';


function Add() {
  const {addResponse,setAddResponse}=useContext(addResponseContext)
  const [projectData, setProjectData] = useState({
    title: "", languages: "", overview: "", github: "", website: "", projectImage: ""
  })
  const [imageFileStatus, setImagefileStatus] = useState(false)
  const [preview, setPreview] = useState("")
  // console.log(projectData);

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setProjectData({ title: "", languages: "", overview: "", github: "", website: "", projectImage: "" })
    setPreview("")
  }
  const handleShow = () => setShow(true);
  useEffect(() => {
    if (projectData.projectImage?.type == ("image/png" || "image/jpg" || "image/jpeg")) {
      // console.log("generate image url");
      setImagefileStatus(true)
      setPreview(URL.createObjectURL(projectData.projectImage))
    } else {
      setPreview("")
      setProjectData({ ...projectData, projectImage: "" })
      setImagefileStatus(false)
    }
  }, [projectData.projectImage])
  const handleUploadProject = async () => {
    const { title, languages, overview, github, website, projectImage } = projectData
    if (!title || !languages || !overview || !github || !website || !projectImage) {
      toast.warning("Please fill the form completely!!!")
    } else {
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("languages", languages)
      reqBody.append("overview", overview)
      reqBody.append("github", github)
      reqBody.append("website", website)
      reqBody.append("projectImage", projectImage)

      const token = sessionStorage.getItem("token")
      console.log(token);
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        // console.log(reqBody);
        // console.log(reqHeader);

        try {
          const result = await addProjectAPI(reqBody, reqHeader)
          console.log(result);
          if (result.status === 200) {
            // toast.success(`New Project "${result.data.title}" has added Successfully `)
            //share response to context
            setAddResponse(result.data)
            handleClose()
          } else {
            toast.warning(result.response.data)
          }
        } catch (err) {
          console.log(err);
        }

      }

      // toast.success("proceed to api call")

    }
  }
  return (
    <>
      <button onClick={handleShow} className='btn btn-success ms-auto'>Add Project</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg={6}>
              <label style={{ cursor: 'pointer' }}>
                <input type="file" style={{ display: 'none' }} onChange={e => { setProjectData({ ...projectData, projectImage: e.target.files[0] }) }} name="" id="" />
                <img className='img-fluid' src={preview ? preview : projectUploadPic} alt="Project upload pic" />
              </label>
              {!imageFileStatus && <div className="text-danger">File type should be .jpg or .jpeg or .png</div>}
            </Col>
            <Col lg={6}>
              <div class="form-floating mb-3  ">
                <input type="text" class="form-control text-black fw-bolder " id="floatingInput" placeholder=""
                  value={projectData.title} onChange={e => setProjectData({ ...projectData, title: e.target.value })} />
                <label className='text-black' for="floatingInput">Project Title</label>
              </div>
              <div class="form-floating mb-3  ">
                <input type="text" class="form-control text-black fw-bolder" id="floatingInput" placeholder=""
                  value={projectData.languages} onChange={e => setProjectData({ ...projectData, languages: e.target.value })} />
                <label className='text-black' for="floatingInput">languages used</label>
              </div>
              <div class="form-floating mb-3  ">
                <input type="text" class="form-control text-black fw-bolder" id="floatingInput" placeholder=""
                  value={projectData.github} onChange={e => setProjectData({ ...projectData, github: e.target.value })} />
                <label className='text-black' for="floatingInput">Project github link</label>
              </div>
              <div class="form-floating mb-3  ">
                <input type="text" class="form-control text-black fw-bolder " id="floatingInput" placeholder=""
                  value={projectData.website} onChange={e => setProjectData({ ...projectData, website: e.target.value })} />
                <label className='text-black' for="floatingInput">Project Website link</label>
              </div>
              <div class="form-floating mb-3  ">
                <input type="text" class="form-control text-black fw-bolder" id="floatingInput" placeholder=""
                  value={projectData.overview} onChange={e => setProjectData({ ...projectData, overview: e.target.value })} />
                <label className='text-black' for="floatingInput">Project Overview</label>
              </div>


            </Col>

          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUploadProject}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer autoClose={4000} theme='colored'></ToastContainer>
    </>
  )
}

export default Add