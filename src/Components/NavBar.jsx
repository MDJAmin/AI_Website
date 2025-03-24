import React from "react";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent z-50">
      <div className="mx-auto flex justify-center items-center h-16">
        <ul className="flex space-x-6 gap-20 font-bold text-2xl">
          <li>
            <a href="#info" className="text-gray-500 hover:text-black transition-colors border-b-2 border-transparent hover:border-black">
              Information
            </a>
          </li>
          <li>
            <a href="#Slider" className="text-gray-500 hover:text-black transition-colors border-b-2 border-transparent hover:border-black">
              Slider
            </a>
          </li>
          <li>
            <a href="#Contact" className="text-gray-500 hover:text-black transition-colors border-b-2 border-transparent hover:border-black">
              Contact
            </a>
          </li>
          <li>
            <a href="#Footer" className="text-gray-500 hover:text-black transition-colors border-b-2 border-transparent hover:border-black">
              Footer
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}