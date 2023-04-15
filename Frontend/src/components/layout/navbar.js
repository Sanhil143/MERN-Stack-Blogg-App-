const Navbar = () => {
      return(
            <>
                  <nav class="bg-white shadow">
  <div class="container mx-auto px-6 py-4">
    <div class="flex items-center justify-between">
      <div>
        <a href="#" class="text-lg font-bold text-gray-800 hover:text-gray-900">BlogMania❤️</a>
      </div>
      <div class="flex md:hidden">
        <button type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
          <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 18h18v-2H3v2zM3 13h18v-2H3v2zM3 6v2h18V6H3z"></path>
          </svg>
        </button>
      </div>
      <div class="hidden md:flex md:items-center">
        <a href="/home" class="text-gray-600 hover:text-gray-900 mx-4">Home</a>
        <a href="/Login" class="text-gray-600 hover:text-gray-900 mx-4">Log In</a>
        <a href="/Register" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full ml-4">Sign Up</a>
      </div>
    </div>
  </div>
  <div class="hidden md:hidden">
    <div class="px-2 pt-2 pb-3">
      <a href="#" class="block text-gray-600 hover:text-gray-900 font-semibold mb-2">Home</a>
      <a href="#" class="block text-gray-600 hover:text-gray-900 font-semibold mb-2">About</a>
      <a href="#" class="block text-gray-600 hover:text-gray-900 font-semibold mb-2">Contact</a>
    </div>
  </div>
</nav>

            </>
      )
}
export default Navbar;