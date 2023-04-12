import axios from "axios";
import {
      REGISTER_SUCCESS,
      REGISTER_FAIL,
      USER_LOADED,
      AUTH_ERROR,
      LOGIN_SUCCESS,
      LOGIN_FAIL,
      LOGOUT,
} from "../../src/actions/types";

import setAuthToken from "../utils/setAuthToken";
import { appConfig } from "../config/config";


export const createBlog = ({ title, categories }) => async (dispatch) => {
      const token = localStorage.getItem('token');
      if (token) setAuthToken(token);

      const body = JSON.stringify({ title, categories });
      try {
            const res = await axios.post(
                  `${appConfig.API_URL}/blogs/createBlog`,
                  body,
            );
            dispatch({
                  type: REGISTER_SUCCESS,
                  payload: res.data
            })
      } catch (err) {
            console.log(err);
      }
}
      
      
