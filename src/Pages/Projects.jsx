import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import ProjectCard from '../Components/ProjectCard'
import { Col, Row } from 'react-bootstrap'
import { getAllProjectAPI } from '../services/allAPI'


function Projects() {
  const [searchKey,setSearchKey]=useState("")
  const [allProjects, setAllProjects] = useState([])
  const getAllProject = async () => {
    try {
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
        const result = await getAllProjectAPI(searchKey,reqHeader)
        if (result.status === 200) {
          setAllProjects(result.data)
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
  console.log(allProjects);
  useEffect(()=>{
    getAllProject()
  },[searchKey])

  return (
    <>
      <Header></Header>
      <div style={{ marginTop: '150px' }} className='container-fluid'>
        <h1 className='text-center mb-5'>All Projects</h1>
        <div className='container w-25'>
          <input onChange={e=>setSearchKey(e.target.value)} type="text" className=' form-control border-dark' placeholder='Search Products by Technologies Used' />
        </div>
        <Row className='mt-5'>
          {allProjects.length > 0 ?
          allProjects.map((project,index)=>
          <Col key={index} sm={12} md={6} lg={4}>
          <ProjectCard project={project}></ProjectCard>
        </Col> ) 
          :
          <div className='fw-bolder text-danger fs-4'>Nothing To Display!!!</div>

          }


        </Row>

      </div>

    </>
  )
}

export default Projects