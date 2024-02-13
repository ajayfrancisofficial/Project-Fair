import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authImage from '../assets/authImage.avif'
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../services/allAPI';
import { FloatingLabel, Spinner } from 'react-bootstrap';
import { tokenAuthContext } from '../Context/TokenAuth';




function Auth({ insideRegister }) {
  const { isAuthorised, setIsAuthorised }=useContext(tokenAuthContext)
  const [userInputData, setUserInputData] = useState({ username: "", email: "", password: "" })
  const navigate = useNavigate()
  const [loginStatus, setLoginStatus] = useState(false)

  const handleRegister = async (e) => {
    e.preventDefault()
    // console.log(userInputData);
    const { username, email, password } = userInputData
    if (!username || !email || !password) {
      toast.info("please fill the form completely!!!")
    }
    else {
      // toast.success("proceed to register api")
      try {
        const result = await registerAPI(userInputData)
        // console.log(result);
        if (result.status === 200) {
          toast.success(`Welcome ${result.data.username}, Please login to explore our site`)
          setUserInputData({ username: "", email: "", password: "" })
          setTimeout(() => {
            navigate("/login")
          }, 1500);
        } else {
          toast.warning(result.response.data);
        }

      }
      catch (err) {
        console.log(err);

      }
    }
  }
  const handleLogin = async (e) => {
    e.preventDefault()
    // console.log(userInputData);
    const { email, password } = userInputData
    if (!email || !password) {
      toast.info("please fill the form completely!!!")
    }
    else {
      // toast.success("proceed to register api")
      try {
        const result = await loginAPI({ email, password })
        console.log(result);
        if (result.status === 200) {
          //store token and username in session storage
          sessionStorage.setItem("username", result.data.existingUser.username)
          sessionStorage.setItem("token", result.data.token)
          sessionStorage.setItem("userDetails",JSON.stringify( result.data.existingUser))
          setLoginStatus(true)
          setIsAuthorised(true)
          setTimeout(() => {
            setUserInputData({ email: "", password: "" })
            setLoginStatus(false)
            navigate('/')
          }, 2000);


        } else {
          toast.warning(result.response.data);
        }

      }
      catch (err) {
        console.log(err);

      }
    }
  }

  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
      <div className='container w-75'>
        <Link to={'/'} className='btn btn-info'><i className='fa-solid fa-arrow-left  '></i> Home</Link>
        <div className='card shadow-lg bg-info mt-2'>
          <div className='row align-items-center'>
            <div className="col-lg-6">
              <img src={authImage} alt="Authentication" />
            </div>
            <div className="col-lg-6 text-center">
              <h1 className='mb-3 fw-bolder text-light'><i style={{ height: '41px' }} class="fa-solid fa-sheet-plastic me-2"></i>Project Fair</h1>
              <h5 className='m-3'>Sign {insideRegister ? 'Up' : 'In'} to your Account</h5>
              <Form className='container w-50'>
                {insideRegister &&
                  <FloatingLabel className="mb-3 w-100" controlId="floatingUsername" label="Name">
                    <Form.Control onChange={(e) => setUserInputData({ ...userInputData, username: e.target.value })} type="text" placeholder="Name" value={userInputData.username} />
                  </FloatingLabel>
                }
                <FloatingLabel className="mb-3 w-100" controlId="floatingEmail" label="Email">
                  <Form.Control type="email" placeholder="email"
                    onChange={(e) => setUserInputData({ ...userInputData, email: e.target.value })} value={userInputData.email} />
                </FloatingLabel>
                <FloatingLabel className="mb-3 w-100" controlId="floatingPassword" label="Password">
                  <Form.Control type="password" placeholder="Password "
                    onChange={(e) => setUserInputData({ ...userInputData, password: e.target.value })} value={userInputData.password} />
                </FloatingLabel>
                {insideRegister ?
                  <div>
                    <button onClick={handleRegister} className='btn btn-success  mb-2'>Register</button>
                    <p>Already have an Account? Click here to <Link to={'/login'} className='text-light'>Login</Link></p>
                  </div>
                  :
                  <div>
                    <button onClick={handleLogin} className='btn btn-success mb-2'>Login
                      {loginStatus && <Spinner className='ms-2' animation="border" size='sm' variant="light" />}

                    </button>
                    <p>New User? Click here to <Link to={'/register'} className='text-light'>Register</Link></p>
                  </div>
                }
              </Form>
            </div>

          </div>

        </div>

      </div>
      <ToastContainer autoClose={4000} theme='colored'></ToastContainer>
    </div>
  )
}

export default Auth