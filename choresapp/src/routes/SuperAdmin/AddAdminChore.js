import React, { useState } from 'react'
import config from '../../config'

function AddAdminChore() {
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

    return (
        <div>
             <h3>Add New Chore Option:</h3>
            <h4>Chore Title:</h4>
            <section className='admin-form'> 
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
            </section>
        </div>
    )
}

export default AddAdminChore
