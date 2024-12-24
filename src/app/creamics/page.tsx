import React from "react";
import Image from "next/image";


export default function CeramicsCollection() {
  const products = [
    {
      name: "The Dandy chair",
      price: 250,
      Image: "/creamic1.png",
      background: "bg-[#92ADB0]"
    },
    {
      name: "Rustic Vase Set",
      price: 155,
      Image: "/creamic2.png",
      background: "bg-[#D9D9D6]"
    },
    {
      name: "The Silky Vase",
      price: 125,
      Image: "/creamic3.png",
      background: "bg-[#373737]"
    },
    {
      name: "The Lucy Lamp",
      price: 399,
      Image: "/creamic4.png",
      background: "bg-[#52B0B0]"
    }
  ]

  return (
    <section className="max-w-[1440px] min-h-[761px] mx-auto px-4 md:px-8 py-16">
      <h2 className="text-4xl md:text-5xl font-light mb-12 px-4">
        New ceramics
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col">
            <div className={`aspect-square mb-6 ${product.background}`}>
              <Image
                src={product.Image}
                alt={product.name}
                height={400}
                width={400}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-normal mb-2">{product.name}</h3>
            <p className="text-lg text-gray-600">£{product.price}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <button className="px-8 py-3 bg-white text-black hover:bg-gray-500 border border-gray-200 rounded-sm transition-colors">
          View collection
        </button>
      </div>
    </section>
  )
}
