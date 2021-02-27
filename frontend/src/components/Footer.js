import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <Container>
        <Row className='align-items-center'>
          <Col md={5} className='text-center py-3'>Copyright &copy; ProShop | Powered by <a className="text-light" href="https://t.me/farrux_muslim">Farrux Developer</a></Col>
         <Col md={4} className="offset-md-3">
              <div className="social-media d-flex align-items-center">
                  <a href="#" className="mr-2">
                    <i className="fab fa-instagram "></i>
                  </a>
                  <a href="#" className="mr-2">
                    <i className="fab fa-telegram"></i>
                  </a>
                  <a href="#" className="mr-2">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="mr-2">
                    <i className="fab fa-youtube"></i>
                  </a>
              </div>
         </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
