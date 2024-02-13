import React, { useEffect, useState } from 'react'
import projectpic from '../assets/projectpic.jpeg'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import ProjectCard from '../Components/ProjectCard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getHomeProjectAPI } from '../services/allAPI'



function Home() {
    const [loginStatus, setLoginStatus] = useState(false)
    const [allProjects, setAllprojects] = useState([])
    const getHomeProject = async () => {
        try {
            const result = await getHomeProjectAPI()
            if (result.status === 200) {
                setAllprojects(result.data)
            }
        } catch (err) {
            console.log(err);
        }
    }
    console.log(allProjects);
    useEffect(() => {
        getHomeProject()
        if (sessionStorage.getItem("token")) {
            setLoginStatus(true)
        } else {
            setLoginStatus(false)
        }
    }, [])
    const navigate = useNavigate()
    const handleNavigate = () => {
        if (loginStatus === true) {
            navigate('/projects')
        } else {
            toast.warning("Please Log in to get full access to our projects!!!")
        }
    }
    return (
        <div>
            <div className=' m-5'>
                <Row>
                    <Col lg={6} className='text-center mt-5'>

                        <h1 className=' display-1' style={{ height: '120px' }}><i class="fa-solid fa-sheet-plastic me-3" style={{ height: '90px' }}></i>Project Fair</h1>
                        <p>One Stop Destination for all Software Development Projects, where user can add and manage their projects.
                            As well as access all
                            project available in our website...what are you waiting for!!!</p>
                        {loginStatus ? <Link to={'/dashboard'} className='btn btn-info'>Manage your Projects <i className='fa-solid fa-location-arrow '></i></Link> : <Link to={'/login'} className='btn btn-info'>Start Exploring <i className='fa-solid fa-location-arrow '></i></Link>}
                    </Col>
                    <Col lg={6}>
                        <img width={'600px'} src={projectpic} alt="" />

                    </Col>
                </Row>
            </div>
            <div className='mt-5'>
                <h1 className='text-center mb-5'>Explore Our Projects</h1>
                <marquee>
                    <div className='d-flex'>
                        {allProjects.length > 0&& allProjects.map((project, index) =>
                            <div key={index} className='project me-5'>
                                <ProjectCard project={project}></ProjectCard>
                            </div>
                        )}
                    </div>
                </marquee>
                <div className='text-center'>
                    <button onClick={handleNavigate} className='btn btn-success'>View More Projects</button>
                </div>
            </div>

            <ToastContainer autoClose={4000} theme='colored'></ToastContainer>

        </div>
    )
}

export default Home