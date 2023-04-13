import axios from "axios";

import { appConfig } from "../config/config";

export async function getBlogs() {
 
  
  const res = await axios.get(`${appConfig.API_URL}/blogs/`);
  return res;
}


