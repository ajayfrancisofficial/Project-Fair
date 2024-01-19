import React, { useState } from 'react'
import { Button, Card, Modal, Row, Col } from 'react-bootstrap'
import authImage from '../assets/authImage.avif'

function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <>
      <Card className='shadow mb-5 btn ' onClick={handleShow} style={{ width: '25rem' }}>
        <Card.Img variant="top" src={authImage} />
        <Card.Body>
          <Card.Title className='text-dark'>Card Title</Card.Title>
        </Card.Body>
      </Card>

      <Modal size='lg' show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
              <img className='img-fluid rounded' src={authImage} alt="Project image" />
            </Col>
            <Col sm={12} md={6}>
              <h1 className="fw-bolder text-warning">Title</h1>
              <p>Project Overview: <span className='fw-bolder'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus quasi quos sapiente excepturi et sed harum a eum. Praesentium reiciendis excepturi asperiores, assumenda voluptas totam a cumque id voluptatem dicta!</span></p>
              <p>Technologies Used: <span className="fw-bolder text-danger">HTML, CSS, JS</span></p>
            </Col>
          </Row>
          <div className='mt-3'>

            <a href="https://getbootstrap.com/" className='m-3' style={{color:'black'}} target='_blank' > <i style={{height:'40px'}} className='fa-brands fa-github fa-2x'></i></a>
            <a href="https://getbootstrap.com/" className='m-3' style={{color:'black'}} target='_blank' > <i style={{height:'40px'}} className='fa-solid fa-link fa-2x'></i></a>


          </div>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default ProjectCard