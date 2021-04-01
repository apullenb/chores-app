import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import {withRouter} from 'react-router-dom'
import Button from '../../components/button/button';
import { useDispatch } from 'react-redux'
import config from '../../config'
import AddChild from './AddChild'
import ChildCard from '../../components/ChildCard';
import './dashboard.css'

function Dashboard(props) {
    const [parent, setParent] = useState(false)
    const [children, setChildren]= useState(false)
    const [show, setShow] = useState('hide')

    console.log(children)
    console.log(parent)

    const getParentInfo = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${config.API_ENDPOINT}/api/parent`, {
              method: "GET",
              headers: { "content-type": "application/json", token: `${token}` },
            });
            const parseRes = await response.json();
            setParent(parseRes);
          } catch (error) {
            console.error(error.message);
          }
    }
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
 getParentInfo()
}, [])

    return (
        <div className='parent-dashboard'>
           <section className='top'>
           <h1>Hello {parent.parent_name}!</h1>
            <h2>DASHBOARD</h2>
           </section>
           
            <section className='children'>
            <h3>Children:</h3>
            <div className='child-cards'>
            {!children || children === [] || children === undefined ? (<div><h3>No Children Added.</h3><p>Add Your Child to Begin.</p></div>) : children.map(child => {
               return <div key={child.child_id}> <ChildCard info={child} /> </div>} ) }
           </div>
           <button>+ Add Child</button>  
            </section>
            <section>
                
            <AddChild />
            </section>
            
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
