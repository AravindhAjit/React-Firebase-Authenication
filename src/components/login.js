import React, { useRef, useState } from 'react'
import {Card, Button, Form, Alert } from "react-bootstrap"
import { UseAuth } from '../context/AuthContext'
import {Link , useHistory} from 'react-router-dom'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = UseAuth()
    const [error, setError] = useState()
    const [Loading, setLoading] = useState(false)
    const history = useHistory()

     async function handlesubmit(e) {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
             await login(emailRef.current.value, passwordRef.current.value)
            history.push('/dashboard')
        } catch {
            setError('Failed to Sign in')
        }
        setLoading(false)
    }
    return (

        <Card >
              <Card.Header className="text-center mb-4">This is a card header</Card.Header>

            <Card.Body >
                <h3 class = "text-center mb-4" > Login </h3> 
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit = {handlesubmit} >
                    
                    <Form.Group id = "email" >
                        <Form.Label > Email </Form.Label>
                        <Form.Control type = "email" ref = { emailRef } required /> 
                    </Form.Group > 
                    
                    <Form.Group id = "password" >
                        <Form.Label > Password </Form.Label>
                        <Form.Control type = "password" ref = { passwordRef } required /> 
                    </Form.Group > 
                <Button disabled={Loading} className = "w-100" type = "submit" > Login </Button> 
                </Form > 
            </Card.Body> 
            <div class = "w-100 text-center mt-2" >Sign in if you dont have an account <Link to="/signup">Signup</Link> </div>
            <div class = "w-100 text-center mt-2" > Forgot Password?  <Link to="/forgot">Click here </Link> </div> 
        </Card >
    )
}