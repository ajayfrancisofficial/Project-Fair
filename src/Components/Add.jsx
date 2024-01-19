import React, { useState } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap';
import projectUploadPic from '../assets/projectUploadPic.jpg'


function Add() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button onClick={handleShow} className='btn btn-success'>Add Project</button>

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
<label style={{cursor:'pointer'}}>
  <input type="file" style={{display:'none'}} name="" id="" />
  <img className='img-fluid' src={projectUploadPic} alt="Project upload pic" />
</label>
</Col>
<Col lg={6}>
<div class="form-floating mb-3  ">
    <input type="email" class="form-control text-black fw-bolder " id="floatingInput" placeholder="name@example.com"/>
    <label className='text-black' for="floatingInput">Project Title</label>
  </div>
  <div class="form-floating mb-3  ">
    <input type="email" class="form-control text-black fw-bolder" id="floatingInput" placeholder="name@example.com"/>
    <label className='text-black' for="floatingInput">language used</label>
  </div>
  <div class="form-floating mb-3  ">
    <input type="email" class="form-control text-black fw-bolder" id="floatingInput" placeholder="name@example.com"/>
    <label className='text-black' for="floatingInput">Project github link</label>
  </div>
  <div class="form-floating mb-3  ">
    <input type="email" class="form-control text-black fw-bolder " id="floatingInput" placeholder="name@example.com"/>
    <label className='text-black' for="floatingInput">Project Website link</label>
  </div>
  <div class="form-floating mb-3  ">
    <input type="email" class="form-control text-black fw-bolder" id="floatingInput" placeholder="name@example.com"/>
    <label className='text-black' for="floatingInput">Project Overview</label>
  </div>
  

</Col>

        </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      
      </>
  )
}

export default Add