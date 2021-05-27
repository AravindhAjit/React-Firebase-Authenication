import React, { useRef, useState } from 'react'
import {Card, Button, Form, Alert } from "react-bootstrap"
import { UseAuth } from '../context/AuthContext'
import {Link } from 'react-router-dom'

export default function Forgotpass() 
{
    const emailRef = useRef()
    const { resetPassword } = UseAuth()
    const [error, setError] = useState()
    const [message, setMessage] = useState()
    const [Loading, setLoading] = useState(false)

    async function handlesubmit(e) {
    e.preventDefault()

    try
    {   
        setMessage('')
        setError('')
        setLoading(true)
        await resetPassword(emailRef.current.value)
        setMessage("Check your inbox")
    }

    catch
    {
        setError("Failed to reset password")
    }


    }
    return (
        <>
            <Card >
                <Card.Body >
                    
                    <h3 class = "text-center mb-4" > Password forgot ah </h3> 
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit = {handlesubmit} >

                    <Form.Group id = "email" >
                    <Form.Label > Email </Form.Label>
                    
                    <Form.Control type = "email" ref = { emailRef } required /> 
                    </Form.Group >          
                    
                    <Button disabled={Loading} className = "w-100" type = "submit" > Send mail </Button> 
                    </Form >
                    <div className="w-100 text-center mt-2">
                    <Link to="/dashboard">Cancel</Link>
                </div>
                </Card.Body> 
                    
                </Card >
                

        </>
    )
}