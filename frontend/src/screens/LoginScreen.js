import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <FormContainer>
      <h1>Tizimga Kirish</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
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
            placeholder='Parolni kiriting'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Tizimga kirish
        </Button>
      </Form>

      <Row className='py-3'>
        <Col className="text-center">
          Yangi foydalanuvchimisiz unda avval ro'yxatdan o'ting ?{' '}
          <Link className="text-info" to={redirect ? `/register?redirect=${redirect}` : '/register'}>
            <br/>
            Ro'yxatdan o'tish uchun
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
