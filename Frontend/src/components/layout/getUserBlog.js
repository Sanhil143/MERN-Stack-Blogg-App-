
import React, { useEffect, useState } from "react";
import { UserBlogs } from "../../scripts/userBlogs";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";


const getUserBlogs = () => {
      const [blogs,setBlogs] = useState([]);

      useEffect(() => {
            UserBlogs()
            .then((res) => {
                  setBlogs(res.data.data);
            })
            .catch((err)=>)
            }
      })
}