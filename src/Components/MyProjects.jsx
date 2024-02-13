import React, { useContext, useEffect, useState } from 'react'
import Add from './Add'
import Edit from './Edit'
import { deleteProjectAPI, getUserProjectAPI } from '../services/allAPI'
import { addResponseContext, updateResponseContext } from '../Context/ContextShare'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyProjects() {
  const { editResponse, setEditResponse } = useContext(updateResponseContext)
  const { addResponse, setAddResponse } = useContext(addResponseContext)

  const [allProjects, setAllProjects] = useState([])
  const getUserProjects = async () => {
    try {
      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
        const result = await getUserProjectAPI(reqHeader)
        if (result.status === 200) {
          setAllProjects(result.data)
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
  // console.log(allProjects);
  useEffect(() => {
    getUserProjects()
  }, [addResponse, editResponse])

  const handleDeleteProject = async (projectId) => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await deleteProjectAPI(projectId, reqHeader)
        if (result.status == 200) {
          getUserProjects()       
        } else {
          console.log(result);
        }
      } catch (err) {
        console.log(err);

      }
    }
  }

  return (
    <div className=' shadow rounded p-3 rounded m-3 border'>
      <div className='d-flex justify-content-between'>
        <h2>My Projects</h2>
        <Add></Add>
      </div>
      <div className="mt-4">
        {allProjects.length > 0 ? allProjects.map((project, index) =>
          <div key={index} className="border rounded d-flex justify-content-between p-2 mb-2 align-items-center">
            <h5 className='mt-2'>{project?.title}</h5>
            <div className='icons d-flex align-items-center'>
              <Edit project={project}></Edit>
              <a href={project?.github} target='_blank' ><i style={{ height: '34px' }} className='fa-brands fa-github mt-2 mx-4 fa-2x text-info'></i></a>
              <button onClick={() => handleDeleteProject(project._id)} className='btn btn-link'><i style={{ height: '33px' }} className='fa-solid fa-trash mt-2 mx-4 fa-2x text-danger  '></i></button>
            </div>
          </div>)
          :
          <div className='text-warning '>No Projects Uploaded yet!!!</div>
        }
      </div>
      <ToastContainer autoClose={4000} theme='colored'></ToastContainer>

    </div>
  )
}

export default MyProjects