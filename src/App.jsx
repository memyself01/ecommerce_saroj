// import Navbar from "./components/Navbar";
import { useState } from "react";
import React from "react";

function App() {
  const products = [
    {
      id: 1,
      name: "Black t-shirt",
      href: "#",
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "Rs 1200",
      color: "Black",
    },
    {
      id: 2,
      name: "Tiger",
      href: "#",
      imageSrc:
        "https://acquires.in/cdn/shop/files/smooth-white-cotton-t-shirt-with-beautiful-3d-design-879335.jpg?v=1723878953",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "Rs 2500",
      color: "white",
    },
    {
      id: 3,
      name: "Tiger",
      href: "#",
      imageSrc: "https://i.ebayimg.com/images/g/kdkAAOSwCgpkzAmP/s-l400.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "Rs 2800",
      color: "B & W",
    },
    {
      id: 4,
      name: "Tiger",
      href: "#",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq1oW1UjbR_XDCiaALcvINv7TcR8Z4JHFwjI_onmrpPNX7TT7D9WoqHpO3Td7liRA6qq8&usqp=CAU",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "Rs 2800",
      color: "B & W",
    },
    // More products...
  ];
  
  return (
   
   
    <>
      {/* // <Navbar /> */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;