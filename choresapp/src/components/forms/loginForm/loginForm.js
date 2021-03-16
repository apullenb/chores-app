import React, { useState } from "react";
import "./loginForm";
import { formValidation } from '../../../validations/formValidation'

function LoginForm() {
  const [emailError, setEmailError] = useState({ error: false, errorMessage: "" })
  const [passwordError, setPasswordError] = useState({ error: false, errorMessage: "" })


console.log(emailError)

  return (
    <form>
      { emailError.error ? <label htmlFor="email">{emailError.errorMessage}</label> : <div />}
      <input type="email" name="email" placeholder="Email" onBlur={(input) => {
        setEmailError(formValidation.emailValidation(input))
      }} />
      { passwordError.error ? <label htmlFor="password">{passwordError.errorMessage}</label> : <div />}
      <input type="password" placeholder="Password" onBlur={(input) => {
        setEmailError(formValidation.passwordValidation(input))
      }}  />
      <button type='submit' > Login </button>
    </form>
  );
}

export default LoginForm;
