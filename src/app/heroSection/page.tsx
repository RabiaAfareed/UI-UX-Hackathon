import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 mt-[60px]">
      {/* Container */}
      <div className="flex flex-col-reverse lg:flex-row items-center bg-[#2A2640] rounded-lg overflow-hidden relative">
        {/* Text Content */}
        <div className="lg:w-1/2 px-6 sm:px-12 lg:px-16 py-8 lg:py-16 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-snug mb-6">
            The furniture brand for the future, with timeless designs
          </h1>
          <p className="text-white/80 text-sm sm:text-base lg:text-lg mb-8">
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way
            to display things digitally using modern web technologies.
          </p>
          <button className="bg-white/10 hover:bg-white/20 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md transition-colors">
            View collection
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center bg-[#92ADB0]">
          <Image
            src="/chair.png"
            alt="Modern black chair with wooden legs"
            className="object-contain max-h-[400px] sm:max-h-[480px] lg:max-h-[584px] w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
