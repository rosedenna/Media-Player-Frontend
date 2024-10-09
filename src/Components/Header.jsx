import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
<Navbar className="bg-body-tertiary sticky-top">
        <Container>
          <Navbar.Brand href="#home" className='fw-bolder text-dark'>
            <Link to={'/'} style={{textDecoration:'none',color:'black'}}>
            <i class="fa-solid fa-play fa-bounce me-2"></i>
            Media Player
            </Link>
          
          </Navbar.Brand>
        </Container>
      </Navbar>    
       </>
  )
}

export default Header
