
import React, {useEffect, useState} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LandingPage from './routes/landingPage/landingPage'
import Login from './routes/login/login'
import Signup from './routes/signup/ParentSignup'
import Dashboard from './routes/dashboard/dashboard'
import Homepage from './routes/homepage/homePage'
import "./App.css";
import SuperAdminDash from './routes/SuperAdmin/SuperAdminDash'
import ParentLogin from './routes/login/ParentLogin'


    function App (){

        const [isAuthenticated, setIsAuthenticated] = useState(false);
        
        const setAuth = (bool) => {
          setIsAuthenticated(bool);
        };

        return (<div className="App" >

            <Switch>
            <Route exact path="/login" render={(props) => !isAuthenticated ? (
                  <Login {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/Dashboard" />
                )
              }
            />
              <Route
              path="/signup"
              render={(props) =>
                !isAuthenticated ? (
                  <Signup {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />
                
                <Route exact path='/' component={props => <LandingPage {...props} />} />
                <Route exact path='/dashboard' component={props => <Dashboard {...props} />} />
                <Route exact path='/homepage' component={props => <Homepage {...props} />} />
                <Route exact path='/superAdminDash' component={props => <SuperAdminDash {...props} />} />
                <Route exact path="/parent-login" component={props => <ParentLogin {...props} setAuth={setAuth}/>} />
                {/* <Route   component={props=><div> <h1>Page Not found</h1> </div>} /> */}
            </Switch>
            


        </div>);
}

export default App;