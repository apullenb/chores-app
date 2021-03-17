import React,{useEffect,useRef, useState} from 'react'
import { withRouter } from 'react-router-dom'
import TextInput from '../../textInput/textInput';
import Button from '../../button/button';
import { formValidation } from '../../../validations/formValidation';
function SignupForm(props) {
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
    return (
        <form className="loginForm">
            <TextInput type ={"email"} Validation={formValidation.emailValidation} placeholder={"Email"} name="email" getErrorFormInputFields={getErrorFormInputFields}/>
            <TextInput type={"password"} Validation={formValidation.passwordValidation} placeholder={"Password"} name="password" getErrorFormInputFields={getErrorFormInputFields} />
            <TextInput type={"password"} Validation={formValidation.confirmPassword} placeholder={"ConfirmPassword"}  name="confirmPassword" getErrorFormInputFields={getErrorFormInputFields} />
            <Button buttonName={'Login'} onclick={() => props.history.push('/dashboard')} background={"blue"} id="loginButton" isDisabled={disableButton}/>
        </form>
    )
}

export default withRouter(SignupForm)
