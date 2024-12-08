import React from 'react'
import { CiSearch, CiShoppingCart } from 'react-icons/ci'
import { IoIosContact } from 'react-icons/io'
import Image from 'next/image'
import CeramicsCollection from '../creamics/page'
import Email from '../email/page'

function ProductCard() {
  return (
    <div className="w-full h-auto">
      {/* Top content */}
      <div className="w-full h-auto bg-[#2A254B] text-center text-white p-2">
        <h1>Free delivery on all orders over £50 with code easter checkout</h1>
      </div>

      <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center p-4">
        <h1 className="text-[24px] leading-[30px] font-bold text-black">Avion</h1>
        <ul className="flex flex-wrap text-[16px] leading-[22px] gap-4 md:gap-[44px] text-[#726E8D]">
          <li>Plant pots</li>
          <li>creamics</li>
          <li>Tables</li>
          <li>chairs</li>
          <li>crockery</li>
          <li>Table Wears</li>
          <li>Cutlery</li>
        </ul>
        <div className="flex gap-2 text-black mt-4 md:mt-0">
          <CiSearch size={32} />
          <CiShoppingCart size={32} />
          <IoIosContact size={32} />
        </div>
      </div>

      {/* Bottom content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start w-full p-4">
        <Image
          src={'/image left.png'}
          alt={"chair pic"}
          height={721}
          width={759}
          className="w-full lg:w-1/2 h-auto mb-4 lg:mb-0"
        />
        <div className="lg:ml-8">
          <div className="w-full lg:w-[602px] mt-4 lg:mt-[91px]">
            <div className="w-full lg:w-[602px] p-4">
              <h1 className="text-[24px] leading-[30px] font-[400] text-[#22202E] text-start">The Dandy chair</h1>
              <p className="text-[24px] leading-[32px] text-[#22202E] text-start">£250</p>
              <div className="w-full mt-[14px] pt-[40px] text-start text-[#505977]">
                <h3>Description</h3>
                <p className="text-[16px] leading-[22px] font-[400] text-start">
                  A timeless design, with premium materials features as one of our most <br />
                  popular and iconic pieces. The dandy chair is perfect for any stylish <br />
                  living space with beech legs and lambskin leather upholstery.
                </p>
                <ul className="text-[16px] leading-[22px] font-[400] text-start mt-[20px]">
                  <li className="py-[3px]">Premium Material</li>
                  <li className="py-[3px]">Hand made</li>
                  <li>quality timeless classic</li>
                </ul>
              </div>
              <div className="w-full mt-4">
                <div className="w-full flex flex-wrap lg:flex-nowrap justify-between items-start lg:items-center">
                  <div className="w-full lg:w-auto flex items-center mb-4 lg:mb-0">
                    <h4 className="mr-4">Amount</h4>
                    <button className="w-[112px] h-[46px] bg-[#F9F9F9] text-black">1</button>
                  </div>
                  <button className="w-[112px] h-[46px] bg-[#2A254B] hover:bg-slate-500 text-white">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-[70px] mb-[50px] p-4">
        <h1 className="text-[32px] leading-[40px] font-[400] text-[#22202E] text-start">
          You may also like this
        </h1>
        <CeramicsCollection />
      </div>

      <div className="w-full bg-slate-600 p-4">
        <Email />
      </div>
    </div>
  )
}

export default ProductCard
