import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <nav className="hidden md:flex md:grow">

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link to="/Login" className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
              </li>
              <li>
                <Link to="/Register" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">Sign up</Link>
              </li>
            </ul>

          </nav>
        </div>
      </div>
    </header>
  )
}
export default Header;