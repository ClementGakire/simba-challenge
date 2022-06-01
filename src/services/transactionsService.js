import axios from "axios";

export function getTransactions() {
  return axios.get("http://127.0.0.1:8000/api/transactions");
}

export function saveMovie(transaction) {
  return axios.post("http://127.0.0.1:8000/api/transactions", transaction);
}
