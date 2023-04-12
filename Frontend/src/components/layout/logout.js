import { Link,Redirect } from 'react-router-dom'


const Logout = () => {
  const handleLogout = (e) => {
    // e.preventDefault();
    localStorage.removeItem("token");
    return <Redirect to="/home" />;
  }
  
  
  return (
    <header className="absolute w-full z-30">
      

            {/* Desktop sign in links */}
          
              
              
                <Link to="/Logout" onClick={handleLogout} className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">Logout</Link>
            
            

    </header>
  )
}
export default Logout;