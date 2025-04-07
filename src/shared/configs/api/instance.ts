import axios from "axios";

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const FORMAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
});
