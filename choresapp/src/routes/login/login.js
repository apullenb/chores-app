import React, { useState, useEffect } from "react";
import LoginForm from "../../components/forms/loginForm/loginForm";
import { Link } from "react-router-dom";

function Login(props) {
  const [select, setSelect] = useState("");
  const [selectLink, setselectLink] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setSelect(e.target.value);
  };

  const handleClick = () => {
    console.log("click", selectLink);
    if (select === "parent") {
      setselectLink("/parent-login");
      console.log("click", selectLink);
    }
  };

  return (
    <div>
      <h1>Log In</h1>
      {/* <LoginForm /> */}

      <h3>Are You A Parent or Child?</h3>
      <section className="main-login">
        <input
          type="radio"
          name="select"
          value="parent"
          onChange={handleChange}
        />
        Parent{" "}
        <input
          type="radio"
          name="select"
          value="child"
          onChange={handleChange}
        />
        Child{" "}
        <p>
          <input
            type="radio"
            name="select"
            value="admin"
            onChange={handleChange}
          />
          Admin
        </p>
        <p>
          {select === "parent" && (
            <Link to={{ pathname: "parent-login" }} onClick={handleClick}>
              <button>Next</button>
            </Link>
          )}
          {select === "child" && (
            <Link to={{ pathname: "child-login" }} onClick={handleClick}>
              <button>Next</button>
            </Link>
          )}
        </p>
      </section>
      <section>
      <p> Need to Create an Account? </p>
       <Link to={{ pathname: "/signup" }}>
        {" "}
        <button>Create Account</button>
      </Link>{" "} 
      </section>
    </div>
  );
}

export default Login;
