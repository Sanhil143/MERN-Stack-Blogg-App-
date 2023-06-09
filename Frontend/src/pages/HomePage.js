
import { Link } from "react-router-dom/cjs/react-router-dom.min"
const Homepage = () => {
  
  return (
    <>

      {/* Navbar  */}
      <nav class="bg-gray-300">
        <div class="container mx-auto px-6 py-4">
          <div class="flex items-center justify-between">
            <div>
              <a href="http://www.linkedin.com/in/sanhilrai143" class="text-lg font-bold text-gray-800 hover:text-gray-900">BlogMania  by Sanhil❤️</a>
            </div>
            <div class="flex md:hidden">
              <button type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z"></path>
                </svg>
              </button>
            </div>
            <div class="hidden md:flex md:items-center">
              <Link to="/blogs" class="text-gray-600 hover:text-gray-900 mx-4">Blogs</Link>
              <Link to="/login" class="text-gray-600 hover:text-gray-900 mx-4">Log In</Link>
              <Link to="/register" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full ml-4">Sign Up</Link>
            </div>
          </div>
        </div>
        <div class="hidden md:hidden">
          <div class="px-2 pt-2 pb-3">
            <Link to="/createBlog" class="block text-gray-600 hover:text-gray-900 font-semibold mb-2">Create Blog</Link>
            <a href="#" class="block text-gray-600 hover:text-gray-900 font-semibold mb-2">About</a>
            <a href="#" class="block text-gray-600 hover:text-gray-900 font-semibold mb-2">Contact</a>
          </div>
        </div>
      </nav>

      {/* // <!-- Hero Section --> */}
      <section className="bg-gray-800 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">Create a Beautiful Blog</h1>
              <p className="text-gray-400 mb-6">Share your thoughts, experiences and ideas with the world. Start your own blog today.</p>
              <Link to="/createBlog" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">Create a Blog</Link>
            </div>
            <div className="md:w-1/2">
              <img src="https://picsum.photos/500/300" alt="Blog" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
export default Homepage