import React, { useState } from "react";
import config from "../../config";

function Signup(props) {
    const [inputs, setInputs] = useState({
      parent_name: "",  
      parent_username: "",
        password: "",
        user_type: "parent",
        family_last_name: "",
      });

const {parent_name, parent_username, user_type, family_last_name, password } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
          const body = { parent_name, parent_username, user_type, family_last_name, password };
          if (!parent_username || !password) {
            alert('Username and Password Must Not Be Blank!')
          }
          const response = await fetch(
            `${config.API_ENDPOINT}/api/parent/register`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(body),
            }
          );
          const parseRes = await response.json();
          if (parseRes.token) {
            localStorage.setItem("token", parseRes.token);
            props.setAuth(true);
          } else {
            props.setAuth(false);
            alert(parseRes.error);
          }
        } catch (err) {
          console.error(err.message);
        }
      };
    return (
    < div >
    <h1>Create Account</h1>

    <section>
    <form>
        <label>
          {" "}
          Your First Name:
          <p>
            <input
              type="text"
              name="parent_name"
              value={parent_name}
              required
              onChange={(e) => onChange(e)}
            />
          </p>{" "}
        </label>
        <label>
          {" "}
          Last Name:
          <p>
            <input
              type="text"
              name="family_last_name"
              value={family_last_name}
              required
              onChange={(e) => onChange(e)}
            />
          </p>{" "}
        </label>
        <label>
          {" "}
          Choose a User Name:
          <p>
            <input
              type="text"
              name="parent_username"
              value={parent_username}
              required
              onChange={(e) => onChange(e)}
            />
          </p>{" "}
        </label>
        <label>
          {" "}
          Create Password:
          <p>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              required
            />
          </p>{" "}
        </label>
        <button onClick={onSubmit}>Create Account</button>
      </form>
    </section>
    </div>
    );
}

export default Signup;