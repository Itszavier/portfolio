/** @format */

import axios from "axios";

// http://localhost:5050/api |  https://imanibrown.onrender.com/api

export const request = axios.create({
  baseURL: "https://imanibrown.onrender.com/api",
});
