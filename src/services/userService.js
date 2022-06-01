import axios from "axios";

export function register(user) {
  return axios.post("http://127.0.0.1:8000/api/register", {
    email: user.email,
    password: user.password,
    name: user.name,
  });
}

export function getUsers() {
  return axios.get("http://127.0.0.1:8000/api/users");
}
