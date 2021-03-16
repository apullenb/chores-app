
import React from 'react';
import {Route} from 'react-router-dom';
import  Login from './routes/login/login'
import "./App.css";

function App() {
    return (<div className = "App" >
    
    <Route  exact path='/login'  component={props=><Login {...props}/>} />
    
    
     </div>);
}

export default App;