import axios from "axios"
import { appConfig } from "../config/config"

const UserDetails = () => {
      const token = localStorage.getItem('token')
      const res = axios.get(`${appConfig.API_URL}/users/getUser`,{headers:{'x-auth-key':token}})
      return res;
}

export default UserDetails;