import React from 'react';
import { useSelector } from 'react-redux';
import {withRouter} from 'react-router-dom'
import Button from '../../components/button/button';
import { useDispatch } from 'react-redux'

function Dashboard(props) {
    const state = useSelector(state => state)
    const dispatch = useDispatch();

    console.log(state);
    return (
        <div>
            <h1>Dashboard</h1>
            <Button background={'red'} width={"50px"} buttonName={"log out"} onclick={() => {
                
                dispatch({
                type: "LogOutUser",
                payload: {
                    userId: "",
                    email: "",
                    isAdmin: false
                }
            })
            

                props.history.push('/login')
            
            }} />
        </div>
    )
}

export default withRouter(Dashboard)
