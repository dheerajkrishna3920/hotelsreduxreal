import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

function Header() {
  return (
    <div>
        <Navbar  bg="dark" variant="dark">
        <Container >
          <Navbar.Brand  href="#home">
            <img id='d1' style={{
                height:'70px',
                width:'70px'
            }}
              alt=""
              src="https://i.postimg.cc/8CQMm7nf/plastic-bag-food-delivery-icon-1.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
         <strong className='fs-2 ms-3'> Eat Finder</strong>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header