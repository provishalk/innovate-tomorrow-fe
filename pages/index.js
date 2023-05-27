import { Inter } from "next/font/google";
import React from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const HomePage = () => {
  return (
    <div
      className={`bg-gray-200 min-h-screen flex items-center justify-center ${inter.className}`}
    >
      <div className="max-w-lg bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to My Website!</h1>
        <p className="mb-6">Check out my latest blog posts:</p>
        <Link href="/blogs/exciting-upcoming-technologies-a-glimpse-into-the-future">
          <span className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            Go to Blog
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
