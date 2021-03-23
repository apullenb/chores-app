import React, { useState, useEffect } from 'react'
import config from '../../config'
import AddAdminChore from './AddAdminChore';
import './SuperAdmin.css'

function SuperAdminDash() {

    const [allChores, setAllChores] = useState('')
   
    async function getChoreOptions() {
        try {
          const response = await fetch(`${config.API_ENDPOINT}/api/superAdmin/chores`, {
            method: "GET"
          });
          const parseRes = await response.json();
          setAllChores(parseRes);
         
        } catch (error) {
          console.error(error.message);
        }
      }
    
     
      useEffect(() => {
        getChoreOptions();
      }, []);
     

    return (
        <div className='admin-Dash'>
            <h1>Welcome SuperAdmin</h1>
            <section className='section'>
          Current Chores:
         <h2>Title: {allChores && allChores[0].title }</h2>
         <p>Description:{allChores && allChores[0].description }</p>
         </section>
           <section className='section'>
             <AddAdminChore />
           </section>
        </div>
    )
}

export default SuperAdminDash
