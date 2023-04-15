
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { UserBlogs } from "../../scripts/userBlogs";


const GetUserBlogs = () => {
      const history = useHistory();
      const [blogs, setBlogs] = useState([]);

      useEffect(() => {
            UserBlogs()
                  .then((res) => {
                        setBlogs(res.data.data);
                  })
                  .catch((err) => console.log(err))
      }, []);
      const handleLogout = () => {
            localStorage.removeItem("token");
            history.push('/home');
      }

      return (
            <>
                  <div class="container mx-auto px-6 py-4">
                        <div class="flex items-center justify-between">
                              <div>
                                    <a href="http://www.linkedin.com/in/sanhilrai143" class="text-lg font-bold text-gray-800 hover:text-gray-900">BlogMania by Sanhil❤️</a>
                              </div>
                              <div class="flex md:hidden">
                                    <button type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                                          <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z"></path>
                                          </svg>
                                    </button>
                              </div>
                              <div class="hidden md:flex md:items-center">
                                    <a href="/dashboard" class="text-black-600 hover:text-black-900 mx-4">Dashboard</a>
                                    <a href="/createBlog" class="text-black-600 hover:text-black-900 mx-4">Create blog</a>
                                    <a href="#" onClick={handleLogout} class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full ml-4">Logout</a>
                              </div>

                        </div>
                  </div>
                  {blogs.length > 0 &&
                        blogs.map((post) => {
                              const { title, category, _id } = post;
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
                                                      <a href={`/blogs/${_id}/update`} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline">
                                                            Update
                                                      </a>
                                                      <a href={`/blogs/${_id}/delete`} class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                                            Delete
                                                      </a>
                                                </div>
                                          </div>
                                    </div>


                              );
                        })};
            </>
      )
}

export default GetUserBlogs;