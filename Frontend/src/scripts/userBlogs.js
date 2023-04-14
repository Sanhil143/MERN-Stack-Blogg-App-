import axios from "axios";

import { appConfig } from "../config/config";

export async function UserBlogs() {
      let token = localStorage.getItem("token")
      const res = await axios.get(`${appConfig.API_URL}/blogs/userBlogs`,
      {headers:{"x-auth-key":token}});
      return res;
}