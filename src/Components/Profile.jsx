import React, { useState } from 'react'
import { Accordion, Collapse } from 'react-bootstrap'
import profilepicblank from '../assets/profilepicblank.png'

function Profile() {
  const [open, setOpen] = useState(false);

  return (
    
      <Accordion className=' shadow rounded m-3'>
        <Accordion.Item >
          <Accordion.Header> <h2>Profile</h2></Accordion.Header>
          <Accordion.Body>
            <div className='text-center' id="example-collapse-text">

              <label style={{ cursor: 'pointer' }}>
                <input type="file" style={{ display: 'none' }} />
                <img className='img-fluid rounded-circle' width={'200px'} src={profilepicblank} alt="Upload Profile Pic" />
              </label>

              <div>
                <input type="text" className='form-control border-black container w-75 mb-3 text-center' placeholder='Enter your Github Link Here' />
                <input type="text" className='form-control border-black container w-75 mb-3 text-center' placeholder='Enter your Linkedin Link Here' />
                <button className='btn btn-warning mb-3'>Update</button>
              </div>

            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    
  )
}

export default Profile