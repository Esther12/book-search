import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_SEARCH_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});