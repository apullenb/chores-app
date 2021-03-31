import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import {withRouter} from 'react-router-dom'
import Button from '../../components/button/button';
import { useDispatch } from 'react-redux'
import config from '../../config'
import AddChild from './AddChild'

function Dashboard(props) {
    const [children, setChildren]= useState('')

    console.log(children)
    const  getChildren = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${config.API_ENDPOINT}/api/parent/children`, {
              method: "GET",
              headers: { "content-type": "application/json", token: `${token}` },
            });
            const parseRes = await response.json();
            setChildren(parseRes);
          } catch (error) {
            console.error(error.message);
          }
        }
    

useEffect(() => {
    getChildren()
}, [])
    return (
        <div>
            <h1>Dashboard</h1>
            <AddChild />
        </div>
    )
}
{/* 
    const state = useSelector(state => state)
    const dispatch = useDispatch();
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
            }} /> */}

export default withRouter(Dashboard)
