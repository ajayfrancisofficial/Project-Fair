import React from 'react'
import projectpic from '../assets/projectpic.jpeg'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import ProjectCard from '../Components/ProjectCard'

function Home() {
    const navigate= useNavigate()
    const handleNavigate=()=>{
        navigate('/projects')
    }
  return (
    <div>
        <div className=' m-5'>
            <Row>
                <Col lg={6} className='text-center mt-5'>
                    
                <h1 className=' display-1' style={{height:'120px'}}><i class="fa-solid fa-sheet-plastic me-3" style={{height:'90px'}}></i>Project Fair</h1>
                <p>One Stop Destination for all Software Development Projects, where user can add and manage their projects.
                     As well as access all 
                    project available in our website...what are you waiting for!!!</p>
                <Link to={'/login'} className='btn btn-info'>Start Exploring <i className='fa-solid fa-location-arrow '></i></Link>
                </Col>
                <Col lg={6}>
                <img width={'600px'}  src={projectpic} alt="" />
                
                </Col>
            </Row>
        </div>
        <div className='mt-5'>
            <h1 className='text-center mb-5'>Explore Our Projects</h1>
            <marquee>
                <div className='d-flex'>
                    <div className='project me-5'>
                        <ProjectCard></ProjectCard>
                    </div>
                </div>
            </marquee>
            <div className='text-center'>
                <button onClick={handleNavigate} className='btn btn-link'>View More Projects</button>
            </div>
        </div>

        
    </div>
  )
}

export default Home