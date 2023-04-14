
import React, { useEffect, useState } from "react";
import { UserBlogs } from "../../scripts/userBlogs";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";


const GetUserBlogs = () => {
      const [blogs, setBlogs] = useState([]);

      useEffect(() => {
            UserBlogs()
                  .then((res) => {
                        setBlogs(res.data.data);
                  })
                  .catch((err) => console.log(err))
      }, []);

      return (
            <>
                  {blogs.length > 0 &&
                        blogs.map((post) => {
                              const { title, category } = post;
                              return (
                                    <div key={Math.random()}>
                                          <div className="max-w-md rounded overflow-hidden shadow-lg">
                                                <div className="px-6 py-4">
                                                      <div className="flex items-center mb-2">
                                                            <div>
                                                                  <div className="font-bold text-xl">{title}</div>
                                                                  <p className="text-gray-700 text-base">{category}</p>
                                                            </div>
                                                      </div>
                                                      {/* <p class="text-gray-700 mb-4">Published on <span class="font-bold">{publishedAt}</span></p> */}
                                                      <p className="text-gray-700 text-base">Developed by BlogMania❤️</p>
                                                </div>
                                                <div class="flex justify-end mt-4">
                                                      <a href="/blogs/:blogId" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline">
                                                            Update
                                                      </a>
                                                      <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                                            Delete
                                                      </button>
                                                </div> 
                                          </div>
                                    </div>


                              );
                        })};
            </>
      )
}

export default GetUserBlogs;