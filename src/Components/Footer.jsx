import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
    <Row className='bg-body-tertiary w-100'>
        <Col className='p-4 '>
        <h4 className='ms-3'><i class="fa-solid fa-sheet-plastic ms-2 fs-3"></i> Project Fair</h4>
        <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nisi ex pariatur dolorem iste tempora quae esse beatae, exercitationem consequatur voluptatum sapiente debitis placeat sequi distinctio atque voluptatibus maiores rerum?</p>
        </Col>
        <Col className='p-4'>
        <h4 className='my-4'>Links</h4>
        <Link to={'/'} style={{textDecoration:'none'}}><h6>Home</h6></Link>
        <Link to={'/login'} style={{textDecoration:'none'}}><h6>Login</h6></Link>
        <Link to={'/register'} style={{textDecoration:'none'}}><h6>Register</h6></Link>
        
        </Col>
        <Col>
        <h4 className='ms-3 mt-5'><i class="fa-solid fa-sheet-plastic ms-2 fs-3 me-2"></i>title</h4>
        <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nisi ex pariatur dolorem iste tempora quae esse beatae, exercitationem consequatur voluptatum sapiente debitis placeat sequi distinctio atque voluptatibus maiores rerum?</p>
        
        </Col>
        <Col>
        <h4 className='ms-3 mt-5'><i class="fa-solid fa-sheet-plastic ms-2 fs-3"></i> title</h4>
        <p className='p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nisi ex pariatur dolorem iste tempora quae esse beatae, exercitationem consequatur voluptatum sapiente debitis placeat sequi distinctio atque voluptatibus maiores rerum?</p>
        </Col>
    </Row>
</div>
  )
}

export default Footer