import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import Transactions from "./components/transactions";
import NavBar from "./components/navBar";
import TransactionsForm from "./components/transactionsForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "react-toastify/dist/ReactToastify.css";

import { Component } from "react";

class App extends Component {
  state = {};
  componentDidMount() {
    const token = localStorage.getItem("token");
    //const user = jwtDecode(token);
    //console.log(user);
  }
  render() {
    return (
      <main className="container">
        <ToastContainer />
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/transactions" component={Transactions} />
            <Route path="/new" component={TransactionsForm} />
            <Redirect from="/" exact to="/transactions" />
          </Switch>
        </main>
      </main>
    );
  }
}

export default App;
