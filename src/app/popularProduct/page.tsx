
import React from 'react'
import Image from 'next/image'

export default function PopularProducts() {
 

  const products = [
    {
      name: "The Poplar suede sofa",
      price: 980,
      Image: "/sofa.jpeg", 
      ImageAlt: "Black modern chair with wooden legs on teal background",
      className: "md:col-span-2"
    },
    {
      name: "The Dandy chair",
      price: 250,
      Image: "/creamic1.png",
      ImageAlt: "Black modern chair with wooden legs on teal background",
      className: "md:col-span-1"
    },
    {
      name: "The Dandy chair",
      price: 250,
      Image: "/blackchair.png",
      ImageAlt: "Black and white photo of a wooden chair",
      className: "md:col-span-1"
    }
  ]

  return (
    <section className="w-full max-w-[1440px] min-h-[744px] mx-auto px-4 sm:px-6 lg:px-16 py-12">
      <h2 className="text-3xl sm:text-4xl font-light mb-8 sm:mb-12">
        Our popular products
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
        {products.map((product, index) => (
          <div 
            key={index} 
            className={`${product.className} cursor-pointer`}
          
          >
            <div className="relative aspect-[4/3] mb-4 overflow-hidden">
              <Image
                src={product.Image}
                alt={product.ImageAlt}
                height={400}
                width={600}
                className={`object-cover w-full h-full transition-transform duration-300 `}
              />
            </div>
            <h3 className="text-lg sm:text-xl mb-2">{product.name}</h3>
            <p className="text-base sm:text-lg">£{product.price}</p>
          </div>
        ))}
      </div>

      <button className="text-base sm:text-lg hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
        View collection
      </button>
    </section>
  )
}



