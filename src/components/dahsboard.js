import React, {useState} from 'react'
import {Alert, Card,Button} from 'react-bootstrap'
import {UseAuth} from "../context/AuthContext"
import {Link,useHistory} from "react-router-dom"


export default function Dashboard() {

    const[error,setError] = useState("")
    const history = useHistory()
    const {currentUser,logout} = UseAuth()
   
    async function handlelogout()
    {   
        setError('')

        try
        {
            await logout()
            history.push('/login')
        } 
        catch
        {
            setError("Failed to logout")
        }
    }

    return (
        <>
        <Card>
            <Card.Body>
                <h2 className="text-center mb-4">Profile</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <strong>Email</strong>{currentUser.email}
                <Link to="/update" className="btn btn-primary w-100 mt-3">Update Profile</Link>
            </Card.Body>
        <div class = "w-100 text-center mt-2" > </div>
            <Button variant="link" onClick = {handlelogout}>Logout</Button>
        </Card>
        </>
    )
}
