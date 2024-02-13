import React, { useState } from 'react'
import { Button, Card, Modal, Row, Col } from 'react-bootstrap'
import authImage from '../assets/authImage.avif'
import SERVER_URL from '../services/serverUrl';

function ProjectCard({project}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <>
      <Card className='shadow mb-5 btn ' onClick={handleShow} style={{ width: '25rem',height:'300px' }}>
        <Card.Img variant="top" src={`${SERVER_URL}/uploads/${project?.projectImage}`} />
        <Card.Body style={{height:'80px'}}>
          <Card.Title className='text-dark'>{project?.title}</Card.Title>
        </Card.Body>
      </Card>

      <Modal size='lg' show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
              <img className='img-fluid rounded' src={`${SERVER_URL}/uploads/${project?.projectImage}`} alt="Project image" />
            </Col>
            <Col sm={12} md={6}>
              <h1 className="fw-bolder text-warning">{project?.title}</h1>
              <p>Project Overview: <span className='fw-bolder'>{project?.title}</span></p>
              <p>Technologies Used: <span className="fw-bolder text-danger">{project?.languages}</span></p>
            </Col>
          </Row>
          <div className='mt-3'>

            <a href={project?.github} className='m-3' style={{color:'black'}} target='_blank' > <i style={{height:'40px'}} className='fa-brands fa-github fa-2x'></i></a>
            <a href={project?.website} className='m-3' style={{color:'black'}} target='_blank' > <i style={{height:'40px'}} className='fa-solid fa-link fa-2x'></i></a>


          </div>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default ProjectCard