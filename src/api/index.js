import axios from "axios";
import { domain } from "../constants/urls";

const Axios = axios.create({
    baseURL: domain,
});

export default Axios;
