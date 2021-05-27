import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {UseAuth} from '../context/AuthContext'
export default function Privateroute({component: Component,...rest}) {
    
    const {currentuser }= UseAuth()

    return (
        <Route
            {...rest}
            render={props => {

                if (currentuser)
                {
                    return <Component {...props} />  }
                else
                {
                    return <Redirect to ="/login" />
                }

            }
        }>
        </Route>
    )
}
