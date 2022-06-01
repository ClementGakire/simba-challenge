import React, { Component } from "react";
import { Link } from "react-router-dom";
import TransactionsTable from "./transactionsTable";
import { getTransactions } from "./../services/transactionsService";

class Transactions extends Component {
  state = {
    transactions: [],
  };
  async componentDidMount() {
    const res = await getTransactions();
    const transactions = res.data.transactions;
    this.setState({ transactions });
  }
  render() {
    const { transactions } = this.state;
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-9">
              <h2>Transactions</h2>
            </div>
            <div className="col-3">
              <Link to="/new" className="btn btn-primary text-white text right">
                New Transaction
              </Link>
            </div>
          </div>
        </div>

        <TransactionsTable transactions={transactions} />
      </>
    );
  }
}

export default Transactions;
