import axios from "axios";

const API = axios.create({
  baseURL: "http://10.107.18.27:5000/api",
});

export default API;