import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { IoLanguage } from "react-icons/io5";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const options = ["Home", "Projects", "Contact"];

  return (
    <header className="relative p-4 flex items-center justify-between text-white">
      <span className="hidden sm:inline"></span>

      {/* Mobile Menu Icon */}
      <FiMenu
        className="sm:hidden text-3xl cursor-pointer"
        onClick={() => setIsOpen(true)}
      />

      {/* Desktop Menu */}
      <ul className="hidden sm:flex space-x-6 font-medium">
        {options.map((opt) => (
          <li key={opt} className="hover:text-blue-400 cursor-pointer">{opt}</li>
        ))}
      </ul>

      {/* Translate Button */}
      <div className="flex gap-2 group cursor-pointer">
        <IoLanguage className="text-white text-2xl group-hover:text-blue-400 transition duration-300" />
        <p className="text-white text-md group-hover:text-blue-400 transition duration-300">ES</p>
      </div>

      {/* Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex">
          {/* Slide-in Drawer */}
          <div className="bg-gradient-to-r from-[#051D35] to-[#050E17] w-64 p-6 h-full shadow-lg animate-slide-in">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Menu</h2>
              <FiX className="text-2xl cursor-pointer" onClick={() => setIsOpen(false)} />
            </div>
            <ul className="space-y-4">
              {options.map((opt) => (
                <li
                  key={opt}
                  className="text-white text-xl hover:text-blue-300 cursor-pointer"
                  onClick={() => setIsOpen(false)} // close drawer on click
                >
                  {opt}
                </li>
              ))}
            </ul>
          </div>

          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </header>
  );
}

export default Header;

