
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './routes/landingPage/landingPage'
import Login from './routes/login/login'
import Signup from './routes/signup/signup'
import Dashboard from './routes/dashboard/dashboard'
import Homepage from './routes/homepage/homePage'
import "./App.css";
import SuperAdminDash from './routes/superAdminDash/SuperAdminDash';

class App extends React.Component {

    constructor() {
        super();
        this.state = {

        }
    }




    render() {

        return (<div className="App" >

            <Switch>
                <Route exact path='/login' component={props => <Login {...props} />} />
                <Route exact path='/' component={props => <LandingPage {...props} />} />
                <Route exact path='/signup' component={props => <Signup {...props} />} />
                <Route exact path='/dashboard' component={props => <Dashboard {...props} />} />
                <Route exact path='/homepage' component={props => <Homepage {...props} />} />
                <Route exact path='/superAdminDash' component={props => <SuperAdminDash {...props} />} />
                <Route   component={props=><div> <h1>Page Not found</h1> </div>} />

            </Switch>


        </div>);
    }
}

export default App;