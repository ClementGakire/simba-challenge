import React, { Component } from "react";
import Joi from "joi-browser";

import Form from "./common/form";
import { login } from "./../services/authService";

class LoginForm extends Form {
  state = {
    data: { email: "", password: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const { data: jwt } = await login(data.email, data.password);
      localStorage.setItem("token", jwt.access_token);
      this.props.history.push("/");
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data.message;
        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <>
        <h1>Login</h1>
        <form action="" onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </>
    );
  }
}

export default LoginForm;
