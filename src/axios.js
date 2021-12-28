import axios from "axios";
const instance = axios.create({
  baseURL: "https://tinder-cloneapp-backend1.herokuapp.com",
});

export default instance;
