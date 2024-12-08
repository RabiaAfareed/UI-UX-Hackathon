import React from 'react'
import Header from '../header/page'
import Image from 'next/image'

function ShoppingBasket() {
  return (
    <div>
      <Header />
      {/* Main container */}
      <div className="w-full bg-[#F9F9F9] flex flex-col lg:flex-row px-4 sm:px-8 lg:px-[188px] mt-[64px]">
        <div className="w-full">
          {/* Heading */}
          <h1 className="text-[24px] sm:text-[36px] leading-[32px] sm:leading-[51px] font-[400] text-[#22202E] mb-[24px] sm:mb-[48px]">
            Your shopping cart
          </h1>
          {/* Table Header */}
          <div className="hidden lg:flex justify-between items-center mr-[160px]">
            <p className="text-[14px] leading-[20px]">Product</p>
            <p className="text-[14px] leading-[20px]">Quantity</p>
            <p className="text-[14px] leading-[20px]">Total</p>
          </div>
          <div className="hidden lg:block w-full h-[2px] bg-black my-4"></div>
          {/* Product Items */}
          <div className="flex flex-col gap-[30px]">
            {/* Product 1 */}
            <div className="flex flex-col sm:flex-row justify-between items-center lg:mr-[160px]">
              <Image
                src="/product one.png"
                alt="Product 1"
                height={134}
                width={309}
                className="mb-4 sm:mb-0"
              />
              <p className="text-[14px] sm:text-[16px]">1</p>
              <p className="text-[14px] sm:text-[16px]">£85</p>
            </div>
            {/* Product 2 */}
            <div className="flex flex-col sm:flex-row justify-between items-center lg:mr-[160px]">
              <Image
                src="/Product Two.png"
                alt="Product 2"
                height={134}
                width={309}
                className="mb-4 sm:mb-0"
              />
              <p className="text-[14px] sm:text-[16px]">1</p>
              <p className="text-[14px] sm:text-[16px]">£85</p>
            </div>
          </div>
          {/* Pricing Info */}
          <div className="flex justify-end items-center lg:mr-[160px] mt-[30px]">
            <Image
              src="/pricing information.png"
              alt="Pricing Info"
              height={134}
              width={309}
            />
          </div>
          {/* Checkout Button */}
          <div className="flex justify-center lg:justify-end lg:mr-[160px] mt-[16px]">
            <button className="w-full sm:w-[172px] h-[56px] bg-[#22202E] text-white text-[14px] leading-[20px] font-[400] hover:bg-slate-500">
              Go to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingBasket
