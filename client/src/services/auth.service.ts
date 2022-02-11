import axios from "axios";
import { User } from "../todo.model";

const API_URL = "http://localhost:3001/api/auth/";

export const register = (obj: User) => {
  return axios.post(API_URL + "register", {
    username: obj.username,
    password: obj.password,
    email: obj.email,
  });
};

export const login = (username: string, password: string) => {
  if(username === '' || password === '') {
      return 
  }
  return axios.post(API_URL + "login", {
      username,
      password
  }).then((response) => {
      if(response.data.accessToken) {
          localStorage.setItem("User", JSON.stringify(response.data));
      }
      return response.data;
  })
}