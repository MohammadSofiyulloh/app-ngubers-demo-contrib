import React from 'react';
import Logo from './assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-gradient-to-br from-zinc-200 to-zinc-200 shadow-md">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
        <Link to="/home">
          <img className="h-full w-full" src={Logo} alt="logo"></img>
        </Link>
        <div className="flex w-1/4 flex-col justify-between py-4 lg:flex-row lg:py-0">
          <div className="flex flex-col lg:flex-row">
            <Link to="/beranda" className="block px-4 py-3 text-black hover:text-green-400 lg:py-3">
              Beranda
            </Link>
            <Link to="/login" className="block px-4 py-3 text-black hover:text-green-400 lg:py-3">
              Login
            </Link>
            <Link to="/signup" className="block px-4 py-3 text-black hover:text-green-400 lg:py-3">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
