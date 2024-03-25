import axios from "axios";
import preEndpoint from "./Api";

export default axios.create({
  baseURL: `${preEndpoint}/api`,
});
