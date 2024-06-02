import React from 'react'
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';

export default function Allproducts() {
    const ProductsData = [
      {
        id: 1,
        img: "https://www.beautyflex.co.uk/cdn/shop/products/QEI_Active_Harmonie_reparateur.png?v=1610910556",
        title: "QIE Paris lotion",
        rating: 5.0,
        color: "white",
        price: "17$.11",
        aosDelay: "0",
        button: "Add to cart",
      },
      {
        id: 2,
        img: "https://image.harrods.com/kilian-paris-good-girl-gone-bad-extreme-eau-de-parfum-50ml_15391581_27037165_2048.jpg",
        title: "QIE Paris Parfum",
        rating: 4.5,
        color: "white",
        price: "17$.11",
        aosDelay: "200",
        button: "Add to cart",
      },
      {
        id: 3,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShGjGN3yd0QycPTsiiZ6Qxcn3I9utRKIBDAw&usqp=CAU",
        title: "Pr francoise Bedon paris oil",
        rating: 4.7,
        color: "brown",
        price: "17$.11",
        aosDelay: "400",
        button: "Add to cart",
      },
      {
        id: 4,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_6hCxUrS3TCsoy0Qcghkq415TPunGONC8PQ&usqp=CAU",
        title: "Pr francoise Bedon paris parfum",
        rating: 4.4,
        color: "Yellow",
        price: "17$.11",
        aosDelay: "600",
        button: "Add to cart",
      },
    ];
  return (
    <>
      <Navbar />
      <div className="mt-14 mb-12">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p data-aos="fade-up" className="text-sm text-primary">
              Top Selling Products for you
            </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Live Auction
            </h1>
            <p data-aos="fade-up" className="text-lg text-gray-400">
              Explore on the world's best & largest Bidding marketplace with our
              beautiful Bidding products. We want to be a part of your smile,
              success and future growth.
            </p>
          </div>
          {/* Body section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 md:gap-5 place-items-center ">
              {/* card section */}
              {ProductsData.map((data) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={data.id}
                  className="space-y-3 border border-solid rounded-md p-3 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"
                >
                  <img
                    src={data.img}
                    alt=""
                    className="h-[220px] w-[250px] object-cover rounded-md"
                  />

                  <div>
                    <h3 className="font-semibold">{data.title}</h3>
                    <p className="text-sm text-gray-600">{data.color}</p>
                    <span className="text-xl text-black font-bold">
                      {data.price}
                    </span>
                  </div>
                  <Link to="/Addcart">
                    <button className="mt-4 bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300 ease-in-out">
                      {data.button}
                    </button>
                  </Link>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 md:gap-5 place-items-center mt-10">
              {/* card section */}
              {ProductsData.map((data) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={data.id}
                  className="space-y-3 border border-solid rounded-md p-3 hover:shadow-lg transition duration-300 ease-in-out cursor-pointer"
                >
                  <img
                    src={data.img}
                    alt=""
                    className="h-[220px] w-[250px] object-cover rounded-md"
                  />

                  <div>
                    <h3 className="font-semibold">{data.title}</h3>
                    <p className="text-sm text-gray-600">{data.color}</p>
                    <span className="text-xl text-black font-bold">
                      {data.price}
                    </span>
                    <div className="flex items-center gap-1"></div>
                  </div>
                  <Link to="/Addcart">
                    <button className="mt-4 bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300 ease-in-out">
                      {data.button}
                    </button>
                  </Link>
                </div>
              ))}
            </div>

            {/* view all button */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
