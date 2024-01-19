import React from 'react'
import Header from '../Components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import MyProjects from '../Components/MyProjects'
import Profile from '../Components/Profile'

function Dashboard() {
  return (
    <>
      <Header insideDashboard></Header>
      <div style={{marginTop:"150px"}} className='container'>
        <div style={{height:'90px'}} className='display-4'>Welcome <span className='fw-bolder text-info'>User</span></div>
       </div>

     <Container>
        <Row className='mt-4'>
        <Col lg={8} className=''>
        <MyProjects></MyProjects>
        </Col>
        <Col lg={4}>
        <Profile></Profile>
        </Col>
  </Row>
     </Container>
      </>
  )
}

export default Dashboard