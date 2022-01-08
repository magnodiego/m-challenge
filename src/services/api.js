import axios from 'axios';

export const api = axios.create({
  baseURL: "https://www.amiiboapi.com/api/",
  headers: {
    "Content-type": "application/json",
  }
});
