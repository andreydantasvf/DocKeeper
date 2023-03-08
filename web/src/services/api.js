import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333"
})

const success = response => response;

const error = err => {
  if (401 == err.response.status) {
    localStorage.removeItem("@dockeeper:user");
    localStorage.removeItem("@dockeeper:token");
    window.location = '/';
  } else {
    return Promise.reject(err);
  }
}

api.interceptors.response.use(success, error);

export { api };