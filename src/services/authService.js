import axios from "axios";

export function login(email, password) {
  return axios.post("http://127.0.0.1:8000/api/login", { email, password });
}
