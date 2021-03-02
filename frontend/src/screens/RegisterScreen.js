import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'

const RegisterScreen = ({ location, history }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Parol bir xil emas')
    } else {
      dispatch(register(name, phone ,email, password))
    }
  }

  return (
    <FormContainer>
      <h1>Ro'yxatndan O'tish</h1>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='name'>
          <Form.Label>Ism</Form.Label>
          <Form.Control
            type='name'
            placeholder='Ismingizni kiriting'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
          
        </Form.Group>
        <Form.Group controlId='phone'>
          <Form.Label>Telefon</Form.Label>
          <Form.Control
            type='phone'
            placeholder='Telefon nomeringizni kiriting'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></Form.Control>
          
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label>Elektron Pochta</Form.Label>
          <Form.Control
            type='email'
            placeholder='Email kiriting'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Parol</Form.Label>
          <Form.Control
            type='password'
            placeholder='Parol kiriting'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='confirmPassword'>
          <Form.Label>Parolni Tekshirish</Form.Label>
          <Form.Control
            type='password'
            placeholder='Parolni qaytadan kiriting'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Ro'yxatdan o'tish
        </Button>
      </Form>

      <Row className='py-3'>
        <Col className="text-center">
          Akountingiz bormi unda tizimga kiring?{' '}
          <Link className="text-info" to={redirect ? `/login?redirect=${redirect}` : '/login'}>
            Tizimga kirish
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen
