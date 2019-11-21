import axios from "axios";
import { HOST } from "../config/host";

const api = axios.create({
  baseURL: HOST
});

export default api;
