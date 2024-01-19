import React from 'react'
import { Link } from 'react-router-dom'
import authImage from '../assets/authImage.avif'
import Form from 'react-bootstrap/Form';




function Auth({ insideRegister }) {
  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
      <div className='container w-75'>
        <Link to={'/'} className=''><i className='fa-solid fa-arrow-left'></i> Back to Home</Link>
        <div className='card shadow-lg bg-info mt-2'>
          <div className='row align-items-center'>
            <div className="col-lg-6">
              <img src={authImage} alt="Authentication" />
            </div>
            <div className="col-lg-6 text-center">
              <h1 className='mb-3 fw-bolder text-light'><i style={{ height: '41px' }} class="fa-solid fa-sheet-plastic me-2"></i>Project Fair</h1>
              <h5 className='m-3'>Sign {insideRegister ? 'Up' : 'In'} to your Account</h5>
              <Form className='container w-50'>
                {insideRegister&&
                <Form.Group className="mb-3 w-100" controlId="formBasicName">
                <Form.Control type="text" placeholder="Enter Name" />
              </Form.Group>
                }
                <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3 w-100" controlId="formBasicPswd">
                  <Form.Control type="password" placeholder="Enter Password " />
                </Form.Group>
                {insideRegister?
                <div>
                  <button className='btn btn-success  mb-2'>Register</button>
                  <p>Already have an Account? Click here to <Link to={'/login'} className='text-light'>Login</Link></p>
                </div>
               :
               <div>
               <button className='btn btn-success mb-2'>Login</button>
               <p>New User? Click here to <Link to={'/register'} className='text-light'>Register</Link></p>
             </div>
             }
              </Form>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Auth