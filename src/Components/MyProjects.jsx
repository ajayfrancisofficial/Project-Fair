import React from 'react'
import Add from './Add'
import Edit from './Edit'

function MyProjects() {
  return (
    <div className=' shadow rounded p-3 rounded m-3 border'>
      <div className='d-flex justify-content-between'>
        <h2>My Projects</h2>
        <Add></Add>
      </div>
      <div className="mt-4">
        <div className="border rounded d-flex justify-content-between p-2 mb-2 align-items-center">
          <h5 className='mt-2'>Title</h5>
          <div className='icons d-flex align-items-center'>
            <Edit></Edit>
            <a href="" target='_blank' ><i style={{height:'34px'}} className='fa-brands fa-github mt-2 mx-4 fa-2x text-info'></i></a>
            <button className='btn btn-link'><i style={{height:'33px'}} className='fa-solid fa-trash mt-2 mx-4 fa-2x text-danger  '></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProjects