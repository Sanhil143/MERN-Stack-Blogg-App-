import axios from "axios";

import { appConfig } from "../config/config";

export async function commentBlog() {

      const res = await axios.post(`${appConfig.API_URL}/comments/`);
      return res;
}