import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getCurrencies } from "../services/currenciesService";
import { saveMovie } from "../services/transactionsService";
import { getUsers } from "../services/userService";

class TransactionsForm extends Form {
  state = {
    data: {
      sender: "",
      receiver: "",
      sourceCurrency: "",
      targetCurrency: "",
      exchangeRate: "",
      amount: "",
    },
    errors: {},
    currencies: [],
    users: [],
  };
  async componentDidMount() {
    const res = await getCurrencies();
    const us = await getUsers();
    const users = us.data.users;
    const currencies = res.data.currencies;
    this.setState({ currencies, users });
  }
  doSubmit = async () => {
    await saveMovie(this.state.data);
    this.props.history.push("/");
  };
  schema = {
    sender: Joi.string().required().label("Sender"),
    receiver: Joi.string().required().label("Receiver"),
    sourceCurrency: Joi.string().required().label("Source Currency"),
    targetCurrency: Joi.string().required().label("Target Currency"),
    exchangeRate: Joi.number().required().label("Exchange Rate"),
    amount: Joi.number().required().label("Amount"),
  };
  render() {
    const { currencies } = this.state;
    const { users } = this.state;
    return (
      <>
        <h1>New Transaction</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("sender", "Sender")}
          {this.renderSelect("receiver", "Receiver", users)}
          {this.renderSelect("sourceCurrency", "Source Currency", currencies)}
          {this.renderSelect("targetCurrency", "Target Currency", currencies)}
          {this.renderInput("exchangeRate", "Exchange Rate")}
          {this.renderInput("amount", "Amount")}
          {this.renderButton("Register")}
        </form>
      </>
    );
  }
}

export default TransactionsForm;
