import React, { useState, useEffect } from 'react'
import config from './config'

function SuperAdminDash() {

    const [allChores, setAllChores] = useState('')
    const [inputs, setInputs] = useState('')
    
    const { title, value, steps, description, time_est, suggested_age } = inputs;

    const onChange = (e) => setInputs({ ...inputs, [e.target.name]: e.target.value });

      const onSubmit = async (e) => {
        e.preventDefault();
        const body = { title, value, steps, description, time_est, suggested_age };
    
        if (inputs === "") {
          return alert("Please fill out all fields");
        }
        const response = await fetch(`${config.API_ENDPOINT}/api/superAdmin/chores`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },    
          body: JSON.stringify(body),
        });
        
        const parseRes = await response.json();
        if (parseRes.error) {
          alert(parseRes.error);
          console.error(parseRes.error);
        } else {
          setInputs('');
        }
      };

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
        <div>
            <h1>Welcome SuperAdmin</h1>
          Current Chores:
         <h2>Title: {allChores && allChores[0].title }</h2>
         <p>Description:{allChores && allChores[0].description }</p>
            <h4>Add New Chore Option:</h4>
            Chore Title: 
            <input type='text' name='title' onChange={(e) => onChange(e)} required />
            Chore Description: 
            <input type='text' name='description' onChange={(e) => onChange(e)} required />
            Chore Suggested Token Value: 
            <input type='text' name='value' onChange={(e) => onChange(e)} required />
            Steps to Complete Chore: 
            <input type='text' name='steps' onChange={(e) => onChange(e)} required />
            Estimated Time to Complete Chore: 
            <input type='text' name='time_est' onChange={(e) => onChange(e)} required />
            Suggested Age: 
            <input type='text' name='suggested_age' onChange={(e) => onChange(e)} required />
            <button onClick={onSubmit}> Submit</button>
        </div>
    )
}

export default SuperAdminDash
