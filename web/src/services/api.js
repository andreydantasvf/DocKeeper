import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
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