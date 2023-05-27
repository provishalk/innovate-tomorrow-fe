import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-white text-xl font-bold">InnovateTomorrow</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/">
                <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </span>
              </Link>
              <Link href="/about">
                <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About
                </span>
              </Link>
              <Link href="/blog">
                <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Blog
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
