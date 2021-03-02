import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [phone, setPhone] = useState(shippingAddress.phone)
  const [country, setCountry] = useState(shippingAddress.country)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, phone, country }))
    history.push('/payment')
  }

  
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Yetkazish Xizmati</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
          <Form.Label>Manzil</Form.Label>
          <Form.Control
            type='text'
            placeholder='Manzilni kiriting (misol uchun : 2-dom sebzor olmazor toshkent)'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label>Shahar</Form.Label>
          <Form.Control
            type='text'
            placeholder='Shaharni kiriting'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='phone'>
          <Form.Label>Telefon Raqam</Form.Label>
          <Form.Control
            type='text'
            placeholder='Telefon raqamingizni kiriting'
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='country'>
          <Form.Label>Mamlakat</Form.Label>
          <Form.Control
            type='text'
            placeholder='Mamlakat kiriting'
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Davom Etish
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
