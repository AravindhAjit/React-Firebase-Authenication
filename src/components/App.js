import React from "react"
import { Container } from "react-bootstrap";
import Signup from "./signup"
import Dashboard from "./dahsboard"
import Login from "./login"
import {AuthProvider} from '../context/AuthContext';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Privateroute from "./privateroute";
import Forgotpass from './forgot'
import UpdateProfile from "./updateprofile"


function App() {
  return (

   <Container
   className="d-flex align-items-center justify-content-center"style={{ minHeight: "100vh" }}>
        <div className="w-100" style = {{maxWidth:'400px'}}>
        <Router>
          <AuthProvider>
            <Switch>
            <Privateroute  path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route path="/forgot" component={Forgotpass} />
            <Privateroute exact path="/update" component={UpdateProfile} />
           
            </Switch>
          </AuthProvider>
        </Router>
      </div>
      </Container>

  
  )}

export default App;
