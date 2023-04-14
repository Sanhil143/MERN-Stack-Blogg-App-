import axios from "axios";

import { appConfig } from "../config/config";

export async function UserBlogs() {
      const res = await axios.get(`${appConfig.API_URL}/blogs/userBlogs`);
      return res;
}