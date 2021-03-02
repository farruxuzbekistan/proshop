import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <Nav.Item>
        {step1 ? (
          <LinkContainer to='/login'>
            <Nav.Link>Tizimga Kirish</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Tizimga Kirish</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <Nav.Link>Yetkazish</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Yetkazish</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to='/payment'>
            <Nav.Link>To'lov</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>To'lov</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to='/placeorder'>
            <Nav.Link>Buyurtma qilish</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Buyurtma qilish</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default CheckoutSteps
