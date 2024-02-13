import React, { useContext } from 'react'
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate} from 'react-router-dom';
import { tokenAuthContext } from '../Context/TokenAuth';

function Header({ insideDashboard }) {
  const { isAuthorised, setIsAuthorised }=useContext(tokenAuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    sessionStorage.clear()
    setIsAuthorised(false)
    navigate('/')

  }


  return (
    < >
      <Navbar className="bg-info fw-bolder " style={{ width: '100%', position: 'fixed', top: '0px', zIndex: 5 }}>
        <Container className='text-success'>
          <Navbar.Brand >
            <Link to={'/'} className='fw-bolder ' style={{ textDecoration: 'none' }}>

              <h1 ><i style={{ height: '43px' }} class="fa-solid fa-sheet-plastic me-2" ></i>Project Fair</h1>
            </Link>
          </Navbar.Brand>
          {insideDashboard &&
            
              <button className='btn-link btn' style={{textDecoration:'none'}} onClick={handleLogout} ><h6 className='text-dark '>Logout</h6></button>
            


          }
        </Container>
      </Navbar>
    </>
  )
}

export default Header