import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
    <footer className="bg-dark py-2 text-white">
      <Container>
        <Row className="align-items-center footer-row">
          <Col md={5} className='text-center py-3'>Copyright &copy; MyShop | Powered by <a className='text-white' href="https://t.me/farrux_muslim">Farrux Developer</a></Col>
          <Col md={4} className="offset-md-3">
               <SocialMedia />
            </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
