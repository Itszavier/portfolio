/** @format */

import axios from "axios";

export const request = axios.create({
  baseURL: "http://localhost:5050/api",
});
