import React, { useEffect, useRef } from "react";
import { withRouter } from 'react-router-dom'
import './loginForm.css';
import TextInput from '../../textInput/textInput';
import Button from '../../button/button';
import { formValidation } from '../../../validations/formValidation';

import {useDispatch} from 'react-redux';

function LoginForm(props) {
const dispatch = useDispatch();

  const button = useRef();
  let disableButton = true;
  useEffect(() => {
    button.current = document.getElementById('loginButton');
  }, [])
  const getErrorFormInputFields = (isError) => {
    if (button.current) {
      if (isError) {
        button.current.disabled = true
      }
      else {
        button.current.disabled = false
      }
    }
  }
  const login = ()=>{
    dispatch({
      type:"LoginUser",
      payload:{
        userId: 123123123,
        email:"kidusyilma@gmail.com",
        isAdmin: true
      }
    })
  }

  return (
    <form className="loginForm" action="POST" onSubmit={(e) => {
      e.preventDefault();
      props.history.push('/dashboard')
    }
    }
    >
      <TextInput type={"email"} Validation={formValidation.emailValidation} placeholder={"Email"} name={"email"} getErrorFormInputFields={getErrorFormInputFields} />
      <TextInput type={"password"} Validation={formValidation.passwordValidation} placeholder={"Password"} name={"password"} getErrorFormInputFields={getErrorFormInputFields} />
      <Button buttonName={'Login'} {...props} onclick={login}
        background={"blue"} id="loginButton" isDisabled={disableButton} />
    </form>
  );
}

export default withRouter(LoginForm);
