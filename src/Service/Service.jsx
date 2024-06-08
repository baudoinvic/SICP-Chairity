

import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Service = () => {
  return (
    <div className="what we do">
      <Navbar />

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: 'url("/path/to/hero-image.jpg")' }}
      >
        <div className="absolute inset-0 bg-primary "></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Bringing Auctions to Your Fingertips
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            Our auction website offers a seamless and exciting platform for
            buyers and sellers to connect and participate in auctions from the
            comfort of their homes.
          </p>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                For Buyers
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                Explore a wide range of unique and exciting items, bid on your
                desired products, and secure great deals through our
                user-friendly bidding system.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                For Sellers
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                List your items and reach a vast audience of potential buyers.
                Our platform provides a secure and efficient way to sell your
                products through auctions.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Auction Categories
              </h3>
              <p className="mt-2 text-gray-600 text-center">
                Discover a diverse range of auction categories, from electronics
                and collectibles to art and antiques, catering to every interest
                and taste.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      

      {/* Call-to-Action */}
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Start Bidding Today
          </h2>
          <p className="text-white mb-8">
            Join our exciting auction platform and discover a world of unique
            items and great deals.
          </p>
          <a
            href="/signup"
            className="inline-block bg-white text-indigo-600 font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            Sign Up Now
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;
