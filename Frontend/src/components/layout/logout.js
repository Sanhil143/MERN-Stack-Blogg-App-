import { Link,Redirect } from 'react-router-dom'


const Logout = () => {
  const handleLogout = (e) => {
    // e.preventDefault();
    localStorage.removeItem("token");
    return <Redirect to="/home" />;
  }
  
  
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <nav className="hidden md:flex md:grow">

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              
              <li>
                <Link to="/Logout" onClick={handleLogout} className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">Logout</Link>
              </li>
            </ul>

          </nav>
        </div>
      </div>
    </header>
  )
}
export default Logout;