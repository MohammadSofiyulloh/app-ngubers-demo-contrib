import React from 'react';
import Logo from './assets/logo.png';

function Navbar() {
  return (
    <div className="bg-gradient-to-br from-zinc-200 to-zinc-200 shadow-md">
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black">
        <a href="/home">
          <img className="h-full w-full" src={Logo} alt="logo"></img>
        </a>
        <div className="flex w-1/4 flex-col justify-between py-4 lg:flex-row lg:py-0">
          <div className="flex flex-col lg:flex-row">
            <a href="beranda" className="block px-4 py-3 text-black hover:text-green-400 lg:py-3">
              Beranda
            </a>
            <a href="login" className="block px-4 py-3 text-black hover:text-green-400 lg:py-3">
              Login
            </a>
            <a href="signup" className="block px-4 py-3 text-black hover:text-green-400 lg:py-3">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
