import React, { Component } from "react";
import Table from "./common/table";

class TransactionsTable extends Component {
  columns = [
    { path: "id", label: "ID" },
    { path: "sender", label: "From" },
    { path: "receiver", label: "To" },
    { path: "amount", label: "Value" },
    { path: "sourceCurrency", label: "Currency" },
    { path: "targetCurrency", label: "Currency" },
    { path: "exchangeRate", label: "Rate" },
    { path: "created_at", label: "Created At" },
    { path: "updated_at", label: "Updated At" },
  ];
  render() {
    const { transactions } = this.props;
    return <Table columns={this.columns} data={transactions} />;
  }
}

export default TransactionsTable;
