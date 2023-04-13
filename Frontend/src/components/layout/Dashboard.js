
import { Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";


const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    <Redirect to="/home"/>;
  }
  return (
    <>
      <div class="flex flex-col lg:flex-row h-screen bg-gray-100">
        <div class="bg-white shadow-lg lg:w-64">
          <div class="flex justify-between items-center p-6">
            <a href="#" class="text-lg font-bold text-gray-800 hover:text-gray-900">BlogMania❤️</a>
            <button class="lg:hidden focus:outline-none">
              <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current text-gray-600 hover:text-gray-800">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z"></path>
              </svg>
            </button>
          </div>
          <nav class="text-gray-600">
            <a href="/blogs" class="block py-4 px-6 hover:bg-gray-200">Blogs</a>
            <a href="/createBlog" class="block py-4 px-6 hover:bg-gray-200">Add your blog</a>
            {/* <a href="#" class="block py-4 px-6 hover:bg-gray-200">Categories</a> */}
            {/* <a href="#" class="block py-4 px-6 hover:bg-gray-200">Tags</a> */}
            {/* <a href={Logout} class="block py-4 px-6 hover:bg-red-200">logout</a> */}
            <a href="#" onClick={handleLogout} class="block py-4 px-6 hover:bg-red-200">Logout</a>
          </nav>
        </div>
        <div class="flex-grow p-8">
          <h1 class="text-2xl font-bold mb-8">My profile</h1>
          <div class="flex flex-col lg:flex-row gap-8">
            <div class="bg-white shadow-md p-6 flex-1">
              <h2 class="text-lg font-bold mb-4">Hello🤡</h2>
              <p class="text-2xl font-bold"></p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}


export default Dashboard;