import React, {useState} from 'react'
import config from '../../config'

function AddChild() {
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

    return (
        <div>
            <h3>Add New Child</h3>
            Child's Full Name: <input type='text' name='full_name' value={full_name}  onChange={(e) => onChange(e)} />
            <p>Choose Child's Username: <input type='text' name='username' value={username}  onChange={(e) => onChange(e)} /></p>
            <p>Choose Child's Password: <input type='password' name='password' value={username}  onChange={(e) => onChange(e)} /></p>
            <p>Child's Age: <input type='text' name='age' value={age}  onChange={(e) => onChange(e)} /></p>
            <p>Child's Gender: <input type='text' name='gender' value={gender}  onChange={(e) => onChange(e)} /></p>
        </div>
    )
}

export default AddChild
