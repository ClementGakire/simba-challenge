import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { register } from "../services/userService";

class RegisterForm extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    name: Joi.string().required().label("Name"),
    password: Joi.string().required().label("Password"),
  };
  doSubmit = async () => {
    try {
      const response = await register(this.state.data);
      localStorage.setItem("token", response.data.token);
      console.log(response.data.token);
      this.props.history.push("/");
    } catch (ex) {
      if (ex.response && ex.response.status !== 201) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data.errors.email;
        this.setState({ errors });
      }
    }
  };
  render() {
    return (
      <>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Email")}
          {this.renderInput("name", "Name")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Register")}
        </form>
      </>
    );
  }
}

export default RegisterForm;
