import React, {useState} from 'react'
import config from '../../config'

function AddChild(props) {
    const [inputs, setInputs] = useState({
        full_name: "",
        username: "",
        user_type:'child',
        age:'',
        gender: '',
        tokens: '0',
        password: ''
      });

      const { full_name, username, user_type, age, gender, tokens, password} = inputs
      const onChange = (e) =>
      setInputs({ ...inputs, [e.target.name]: e.target.value });

      const handleSubmit = async () => {
        const body = { full_name, username, user_type, age, gender, tokens, password}
        if (inputs === "") {
            return alert("Please fill out all fields");
          }
          const token = localStorage.getItem("token");
          const response = await fetch(`${config.API_ENDPOINT}/api/child/register`, {
            method: "POST",
            headers: { "content-type": "application/json", token: `${token}` },
            body: JSON.stringify(body),
          });
          const parseRes = await response.json();
          if (parseRes.error) {
            alert(parseRes.error);
            console.error(parseRes.error);
          } else {
            props.display()
              setInputs({ full_name: "",
              username: "",
              user_type:'child',
              age:'',
              gender: '',
              tokens: '0',
              password: ''})
      }
    }
    return (
        <div>
            <h3>Add New Child</h3>
            Child's Full Name: <input type='text' name='full_name' value={full_name}  onChange={(e) => onChange(e)} />
            <p>Choose Child's Username: <input type='text' name='username' value={username}  onChange={(e) => onChange(e)} /></p>
            <p>Choose Child's Password: <input type='password' name='password' value={password}  onChange={(e) => onChange(e)} /></p>
            <p>Child's Age: <input type='text' name='age' value={age}  onChange={(e) => onChange(e)} /></p>
            <p>Child's Gender: <input type='text' name='gender' value={gender}  onChange={(e) => onChange(e)} /></p>
            <button onClick={handleSubmit}>Submit</button>
           <div>
             <p><button onClick={props.display}> x Cancel</button></p>
             </div> 
        </div>
    )
}

export default AddChild
