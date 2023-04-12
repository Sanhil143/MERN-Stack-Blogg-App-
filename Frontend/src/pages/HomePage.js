const Homepage = () => {
      return(
            <>
             {/* Navbar  */}
<nav className="bg-white border-b border-gray-300">
  <div className="container mx-auto flex justify-between items-center py-4 px-8">
    <div className="flex items-center">
      <a href="#" className="text-lg font-bold text-gray-900 hover:text-gray-700">BlogMania❤️</a>
    </div>
    <div className="flex items-center">
      <a href="/Login" className="text-gray-600 hover:text-gray-900">SignIn</a>
      <a href="/Register" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full ml-4">SignUp</a>
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
        <a href="#" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">Create a Blog</a>
      </div>
      <div className="md:w-1/2">
        <img src="https://picsum.photos/500/300" alt="Blog" className="rounded-lg shadow-lg"/>
      </div>
    </div>
  </div>
</section>


     </>
      )
}
export default Homepage