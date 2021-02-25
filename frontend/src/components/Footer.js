import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; ProShop | Powered by <a href="https://t.me/farrux_muslim">Farrux Developer</a></Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
