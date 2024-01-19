import React from 'react'
import Header from '../Components/Header'
import ProjectCard from '../Components/ProjectCard'
import { Col, Row } from 'react-bootstrap'


function Projects() {
  return (
    <>
      <Header></Header>
      <div style={{ marginTop: '150px' }} className='container-fluid'>
        <h1 className='text-center mb-5'>All Projects</h1>
        <div className='container w-25'>
          <input type="text" className=' form-control border-dark' placeholder='Search Products by Technologies Used' />
        </div>
<Row>
<Col sm={12} md={6} lg={4}>
  <ProjectCard></ProjectCard>
</Col>



</Row>

      </div>

    </>
  )
}

export default Projects