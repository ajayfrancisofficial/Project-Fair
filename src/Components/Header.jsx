import React from 'react'
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header({ insideDashboard }) {
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
            <Link to={''} className=' ' style={{ textDecoration: 'none' }}>
              <h56 className='text-dark '>Logout</h56>
            </Link>


          }
        </Container>
      </Navbar>
    </>
  )
}

export default Header