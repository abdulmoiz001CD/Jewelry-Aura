import React from "react";
import Image from "next/image";

function Navbar() {
  return (
    <div>
      <nav className="flex flex-row gap-4 items-center justify-between w-[1486px] h-[135.01px] bg-[#A29875] px-8">
        <h1 className="w-[242.56px] h-[87.45px] text-[#FFFFFF] font-[Rye] text-[66.78px] font-normal leading-[83.48px] text-left">
          Purity
        </h1>

        <div className="leftsidecontainer flex items-center gap-[127.27px]">

          <div className="Inp&Imgcontainer">
          <input
            className="w-[769.89px] h-[56.24px]  outline-none font-sans text-[18px] font-normal leading-[25px] text-left p-2 rounded-[13.83px]"
            type="search"
            placeholder="Search for Gold Jewellery, Diamond Jewellery and more…"
          />
          <Image 
        src="/img/vector.png"   
        alt="Vector Image" 
        width={21.5}
        height={24.5}
        className="w-[21.5px] h-[21.5px] absolute top-[56.76px] left-[1062.66px]"
      />
          </div>
 

         <ul className="flex gap-[38.7px] p-[12px]">
         <Image src="/img/heart.png" alt="Heartimg" width={33.42} height={29.71}/>
         <Image src="/img/man.png" alt="Heartimg" width={33.42} height={29.71}/>
         <Image src="/img/troly.png" alt="Heartimg" width={33.42} height={29.71}/>

         </ul>
        
        </div>
      </nav>
    </div>
  );
}

export default Navbar;


