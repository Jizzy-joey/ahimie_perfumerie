"use client";

import React from "react";
import { perfumes } from "./perfumes/pefs";
import Navbar from "./components/Navbar";
 // adjust the path
 import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* Menu */}
      
      {/* Hero Section */}
      <div className="relative w-full h-96">
        <img
          className="w-screen h-full object-cover brightness-50"
          src="/pef4.jpeg"
          alt="Perfume"
        />
        <p className="absolute inset-0 flex items-center justify-center text-3xl font-semibold text-white text-center px-4">
          Fragrance is the invisible signature of elegance.
        </p>
      </div>

      {/* Perfume List Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {perfumes.map((perfume) => (
          <div
            key={perfume.id}
            className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition"
          >
            <img
              src={perfume.image}
              alt={perfume.name}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{perfume.name}</h2>
            <p className="text-gray-600 mb-3">{perfume.description}</p>
            <p className="text-lg font-semibold text-green-700">
              ₦{perfume.price.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

