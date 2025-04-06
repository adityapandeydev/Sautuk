import React from 'react';

const Header = () => (
  <header className="bg-[#E2F3F4] shadow-md">
    <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-[#6DC7D1]">Sautuk</span>
      </div>
      {/* Navigation */}
      <nav className="hidden md:flex gap-6 text-[#6DC7D1] font-semibold">
        <a href="#" className="hover:text-black">Home</a>
        <a href="#" className="hover:text-black">Posts</a>
        <a href="#" className="hover:text-black">Business</a>
        <a href="#" className="hover:text-black">Technology</a>
        <a href="#" className="hover:text-black">Shop</a>
        <a href="#" className="hover:text-black">Pages</a>
      </nav>
      {/* Icons */}
      <div className="flex items-center gap-4 text-[#6DC7D1]">
        <button aria-label="Cart"><i className="fas fa-shopping-cart"></i></button>
        <button aria-label="Profile"><i className="fas fa-user"></i></button>
        <button aria-label="Search"><i className="fas fa-search"></i></button>
      </div>
    </div>
  </header>
);

export default Header; 