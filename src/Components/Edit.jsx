import React, { useEffect, useState,useContext } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';
import SERVER_URL from '../services/serverUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProjectAPI } from '../services/allAPI';
import { updateResponseContext } from '../Context/ContextShare';


function Edit({ project }) {
  const {editResponse,setEditResponse}=useContext(updateResponseContext)
  const [projectData, setProjectData] = useState({
    id: project._id, title: project.title, languages: project.languages, overview: project.overview, github: project.github, website: project.website, projectImage: ""
  })
  // console.log(projectData);
  const [preview, setPreview] = useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setProjectData({ id: project._id, title: project.title, languages: project.languages, overview: project.overview, github: project.github, website: project.website, projectImage: "" })
    setPreview("")
  }
  const handleShow = () => setShow(true);
  useEffect(() => {
    if (projectData.projectImage) {
      setPreview(URL.createObjectURL(projectData.projectImage))
    } else {
      setPreview("")
    }
  }, [projectData.projectImage])

  const handleUpdateProject =async () => {
    const { id, title, languages, overview, github, website, projectImage } = projectData
    if (!title || !languages || !overview || !github || !website){
      toast.warning("Please fill the form Completely!!!")
    }else{
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("languages", languages)
      reqBody.append("overview", overview)
      reqBody.append("github", github)
      reqBody.append("website", website)
      preview?reqBody.append("projectImage", projectImage):reqBody.append("projectImage", project.projectImage)

      const token=sessionStorage.getItem("token")
      if(token){
        const reqHeader = {
          "Content-Type":preview? "multipart/form-data":"application/json",
          "Authorization": `Bearer ${token}`
        }
        console.log("proceed to api call");
        try{
            const result=await updateProjectAPI(id,reqBody,reqHeader)
            if(result.status==200){
              
              handleClose()
              //share response to "my projects " component using context api because that component doesnt get refreshed automatically
              setEditResponse(result.data)
            }
            else{
              console.log(result);
            }
        }
        catch(err){
          console.log(err);
        }
      }

    
    }
      }


  return (
    <>
      <button onClick={handleShow} className='btn btn-link'><i style={{ height: '33px' }} className='fa-solid fa-edit mt-2 mx-4 fa-2x text-warning' ></i></button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title> Edit Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col lg={6}>
              <label style={{ cursor: 'pointer' }}>
                <input type="file" style={{ display: 'none' }} name="" id="" onChange={e => { setProjectData({ ...projectData, projectImage: e.target.files[0] }) }} />
                <img className='img-fluid' src={preview ? preview : `${SERVER_URL}/uploads/${project?.projectImage}`} alt="Project upload pic" />
              </label>
            </Col>
            <Col lg={6}>
              <div class="form-floating mb-3  ">
                <input type="text" class="form-control text-black fw-bolder " id="floatingInput" placeholder="" value={projectData?.title}
                  onChange={e => setProjectData({ ...projectData, title: e.target.value })} />
                <label className='text-black' for="floatingInput">Project Title</label>
              </div>
              <div class="form-floating mb-3  ">
                <input type="text" class="form-control text-black fw-bolder" id="floatingInput" placeholder="" value={projectData?.languages}
                  onChange={e => setProjectData({ ...projectData, languages: e.target.value })} />
                <label className='text-black' for="floatingInput">languages used</label>
              </div>
              <div class="form-floating mb-3  ">
                <input type="text" class="form-control text-black fw-bolder" id="floatingInput" placeholder="" value={projectData?.github}
                  onChange={e => setProjectData({ ...projectData, github: e.target.value })} />
                <label className='text-black' for="floatingInput">Project github link</label>
              </div>
              <div class="form-floating mb-3  ">
                <input type="text" class="form-control text-black fw-bolder " id="floatingInput" placeholder="" value={projectData?.website}
                  onChange={e => setProjectData({ ...projectData, website: e.target.value })} />
                <label className='text-black' for="floatingInput">Project Website link</label>
              </div>
              <div class="form-floating mb-3  ">
                <input type="text" class="form-control text-black fw-bolder" id="floatingInput" placeholder="" value={projectData?.overview}
                  onChange={e => setProjectData({ ...projectData, overview: e.target.value })} />
                <label className='text-black' for="floatingInput">Project Overview</label>
              </div>


            </Col>

          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpdateProject} variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer autoClose={4000} theme='colored'></ToastContainer>


    </>
  )
}

export default Edit