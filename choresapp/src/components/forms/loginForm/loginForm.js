import React, { useState } from "react";
import "./loginForm";

function loginForm() {
  return (
    <form>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
    </form>
  );
}

export default loginForm;
