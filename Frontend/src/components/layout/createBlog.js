import axios from "axios";

import { appConfig } from "../../config/config";
import { useState } from "react";

const CreateBlog = () => {
      const [title, setTitle] = useState("")
      const [category, setCategory] = useState("")

      const createBlog = async (e) => {
            e.preventDefault() 
            const blogData = {};
            let token = localStorage.getItem("token")

            blogData.title = title;
            blogData.category = category;

            await axios.post(`${appConfig.API_URL}/blogs/createBlogs`, blogData,
            {headers:{"x-auth-key":token}})
            .then((res) => alert("blog created succesfully"))
            .catch((err) => alert(err.message))

      }
      return (
            <>
            {/* <Header/> */}
              <div className="flex flex-col justify-center items-center h-screen">
                <h2 className="text-xl font-bold mb-4">BlogMania❤️</h2>
                <form
                  className="bg-blue-50 rounded px-8 pt-6 pb-8 mb-4"
                  onSubmit={createBlog}
                >
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="email"
                    >
                      title
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="title"
                      name="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="email"
                    >
                      category
                    </label>
                    <input
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="category"
                      name="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      CreateBlog
                    </button>
                  </div>
                  {/* <div className="mt-4">
                    Already have an account? <Link to="/login">Sign In</Link>
                  </div> */}
                </form>
              </div>
            </>
          );

}


export default CreateBlog;