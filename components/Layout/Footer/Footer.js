import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <Link href="/about">
              <span className="text-gray-300 hover:text-white text-sm">
                About
              </span>
            </Link>
            <Link href="/services">
              <span className="text-gray-300 hover:text-white text-sm">
                Services
              </span>
            </Link>
            <Link href="/blog">
              <span className="text-gray-300 hover:text-white text-sm">
                Blog
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-300 hover:text-white text-sm">
                Contact
              </span>
            </Link>
          </div>
          <p className="text-gray-300 text-sm">
            &copy; 2023 InnovateTomorrow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
