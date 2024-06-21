import React from "react";
import Template from "./Template";
import loginimage from "../Images/loginimg.jpg";

function Login() {
  return (
    <div>
      <Template
        title="Welcome Back"
        desc="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={loginimage}
        formType="login"
      />
    </div>
  );
}

export default Login;
