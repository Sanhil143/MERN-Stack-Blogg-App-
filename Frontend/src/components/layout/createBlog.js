import axios from "axios";

import { appConfig } from "../../config/config";
import { useState } from "react";
import { Link, Redirect,useHistory } from "react-router-dom/cjs/react-router-dom.min";

const CreateBlog = () => {
  const history = useHistory()
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [blog, setBlog] = useState("")

  const createBlog = async (e) => {
    e.preventDefault()
    const blogData = {};
    let token = localStorage.getItem("token")

    blogData.title = title;
    blogData.category = category;
    blogData.blog = blog;

    await axios.post(`${appConfig.API_URL}/blogs/createBlogs`, blogData,
      { headers: { "x-auth-key": token } })
      .then((res) => {
      alert("blog created succesfully");
      // <Redirect to="/dashboard" />
      history.push('/dashboard')
    })
      .catch((err) => alert(err.message))

  }
  const handleLogout = () => {
    localStorage.removeItem("token");
    // <Redirect to="/" />
    history.push('/')
  }
  return (
    <>

      <nav class="bg-white shadow">
        <div class="container mx-auto px-6 py-4">
          <div class="flex items-center justify-between">
            <div>
              <Link to="http://www.linkedin.com/in/sanhilrai143" class="text-lg font-bold text-gray-800 hover:text-gray-900">BlogMania by Sanhil❤️</Link>
            </div>
            <div class="flex md:hidden">
              <button type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z"></path>
                </svg>
              </button>
            </div>
            <div class="hidden md:flex md:items-center">
              <Link to="/userBlog" class="text-gray-600 hover:text-gray-900 mx-4">My blogs</Link>
              <Link to="/dashboard" class="text-gray-600 hover:text-gray-900 mx-4">Dashboard</Link>
              <Link to="#" onClick={handleLogout} class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full ml-4">Log out</Link>
            </div>
          </div>
        </div>
        <div class="hidden md:hidden">
          <div class="px-2 pt-2 pb-3">
            <Link to="#" class="block text-gray-600 hover:text-gray-900 font-semibold mb-2">Home</Link>
            <Link to="#" class="block text-gray-600 hover:text-gray-900 font-semibold mb-2">About</Link>
            <Link to="#" class="block text-gray-600 hover:text-gray-900 font-semibold mb-2">Contact</Link>
          </div>
        </div>
      </nav>

      {/* <Header/> */}
      <div className="flex flex-col justify-center items-center h-screen">
        <h2 className="text-xl font-bold mb-4">Create your own blog❤️</h2>
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
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              blog
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="blog"
              name="blog"
              value={blog}
              onChange={(e) => setBlog(e.target.value)}
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
        </form>
      </div>
    </>
  );

}


export default CreateBlog;