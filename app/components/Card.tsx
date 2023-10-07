import React from 'react'
import Image from 'next/image'

export default function Card() {
  return (
    <div className='bg-[#F48856] m-10 rounded-xl py-4 px-6 h-[100%] md:flex items-center justify-between text-center md:text-left'>
        <h3 className='text-white text-[24px] font-bold'>Ready to start making side cash from home?</h3>
        <Image src={"/sr.svg"} alt='images' width={200} height={100}  />
        <div className='flex items-center flex-col '>
            <Image src={"/splash.svg"} alt='images' width={80} height={100}  />
            <button className='px-[40px] my-5 py-[16px] text-orange-500 font-bold bg-white rounded-md'>Start Earning</button>
            <Image src={"/splash2.svg"} alt='images' width={80} height={100}  />
        </div>


        
    </div>
  )
}
