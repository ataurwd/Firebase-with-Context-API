import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FormContext } from '../Context/Provider';

const Navbar = () => {

  const {user, singOutUser} = useContext(FormContext)

  const handelSignOut = () => {
    singOutUser()
    .then(() => {

    })
    .catch((err) => {
      console.error(err);
      // Handle the error here
    })
  }
  // console.log(tryContext.name)
    return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/">
          <h1>Dev Zone</h1>
        </Link>
      </div>

      {/* Menu */}
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/login" className="hover:text-gray-300">Login</Link>
        <Link to="/register" className="hover:text-gray-300">Register</Link>
        <Link to="/contact" className="hover:text-gray-300">Contact</Link>
      </div>

      {/* Button */}
      <div className='space-x-5'>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          {user?.displayName}
        </button>

         {
           user ? 
           <button 
           onClick={handelSignOut}
           className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Sign Out</button> 
           :<Link to={"/login"}>Login</Link> 
         }
      </div>
    </nav>
    );
};

export default Navbar;