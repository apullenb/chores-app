import React, { useState, useEffect } from 'react'
import config from '../../config'
import AddAdminChore from './AddAdminChore';
import AdminChoresBank from './AdminChoresBank';
import './SuperAdmin.css'
import UsersAdmin from './UsersAdmin';

function SuperAdminDash() {

    const [allChores, setAllChores] = useState('')
    const [allParents, setAllParents] = useState('')

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
    
      async function getParentAccts() {
        try {
          const responseP = await fetch(`${config.API_ENDPOINT}/api/superAdmin/parents`, {
            method: "GET"
          });
          const parseResP = await responseP.json();
          setAllParents(parseResP);
         
        } catch (error) {
          console.error(error.message);
        }
      }
     console.log(allParents)
      useEffect(() => {
        getChoreOptions();
        getParentAccts();
      }, []);
     

    return (
        <div className='admin-Dash'>
            <h1>Welcome SuperAdmin</h1>
            <h2>Current Users:</h2>
            <section className='section'>
            <div className='chore-bank'>
          {allParents &&  allParents.map(parent => {
     return <div className='chore' key={parent.parent_user_id}><UsersAdmin parent={parent} /></div>}) }
     </div>
            </section>
            <h2>Chore Suggestions Bank:</h2>
            <section className='section'>
          <div className='chore-bank'>
          {allChores &&  allChores.map(chore => {
     return <div className='chore' key={chore.chore_opt_id}><AdminChoresBank chore={chore} /></div>}) }
     </div>
             <AddAdminChore />
           </section>
        </div>
    )
}

export default SuperAdminDash
