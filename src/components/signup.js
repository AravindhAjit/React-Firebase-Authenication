import React, { useRef, useState } from 'react'
import {Card, Button, Form, Alert } from "react-bootstrap"
import { UseAuth } from '../context/AuthContext'
import {Link,useHistory} from "react-router-dom"



export default function Signup() 
{
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordconfref = useRef()
    const { signup } = UseAuth()
    const [error, setError] = useState()
    const [Loading, setLoading] = useState(false)
    const history = useHistory()

    async function handlesubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordconfref.current.value)
         {
            return setError('Passwords dont match') //error = "Passwords dont match"
         }
        
         try
          {
            setError('') // error = "Null string"
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/dashboard') //pushes to dashboard page
            }
         catch {
            setError('Failed to create acc')
        }
        setLoading(false)
    }
    return (

        <Card >
            <Card.Body >
                <h3 class = "text-center mb-4" > Signup </h3> 
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
                    
                    <Form.Group id = "Password Confirm" >
                        <Form.Label > Password - Confirmation </Form.Label> 
                        <Form.Control type = "password" ref = { passwordconfref } required /> 
                    </Form.Group > 
                     
                    <Button disabled={Loading} className = "w-100" type = "submit" > Signup </Button> 
                </Form > 
            </Card.Body> 
            <div class = "w-100 text-center mt-2" > </div>
            <div class = "w-100 text-center mt-2" >Sign in if already have acc <Link to="/login">Login</Link> </div> 
 
        </Card >
    )
}