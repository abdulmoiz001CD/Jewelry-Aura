import React from 'react';
import Image from 'next/image';

function Hero() {
  return (
    <>
      <div className="containerHero flex flex-row justify-between items-center w-[1271.01px] h-[573.59px] absolute top-[252.83px] left-[107.49px]">

        {/* Left Content Section */}
        <div className="leftCont flex flex-col justify-center gap-6 w-[50%] px-[107.49px]">
          <h1 className="w-[472.97px] h-[162.53px] leading-[62.24px] tracking-[2.5%] font-serif font-bold text-[37.84px]">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="w-[798.9px] h-[144px] font-[500] text-[29.24px] leading-[48.1px] tracking-[2.5%] mt-4">
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>
          <button className="w-[247.67px] h-[49.2px] mt-6 rounded-[8.6px] text-[25.8px] font-[500] leading-[32.25px] text-[#FFFFFF] bg-[#A29875]">
            Explore Now
          </button>
        </div>

        {/* Right Content Section (Image) */}
        <div className="rightCont w-[50%]  pl-[300px]">
          <div className='w-[300.1px] h-[425.43px] absolute m-4 border-[0.86px] border-[#FFFFFF] rounded-tl-[128.99px] rounded-br-[128.99px]'></div>
          <Image src="/img/girlImg.png" alt="girlImg" width={421.38} height={573.59} className='rounded-tl-[128.99px] rounded-br-[128.99px]'/>
        </div>

      </div>
    </>
  );
}

export default Hero;
