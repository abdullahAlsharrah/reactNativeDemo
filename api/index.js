import axios from "axios";
const baseURL = "https://react-native-mini-project-items.eapi.joincoded.com";

const instance = axios.create({
  baseURL: baseURL,
});

export { instance, baseURL };
