import React from 'react'
import Image from 'next/image'
import HeroImg from '@/public/undraw.svg'
export default function Hero() {
  return (
    <div className='sm:mt-[10rem] mt-[3rem] container flex items-start justify-center mx-auto sm:flex-row flex-col p-4 '>
        <div>
            <h1 className='text-[42px] mb-3 font-bold w-[80%]'>Earn Easy Cash Online By Performing The Simplest Tasks!</h1>
            <p className='text-[18px] mb-5 text-gray-400'>Earn thousands of naira daily by posting ads on your WhatsApp status.</p>
            <button className='px-[40px] mb-5 py-[16px] bg-orange-500 font-bold text-white rounded-md'>Start Earning</button>

        </div>

        <div>
            <Image src={HeroImg} alt='image-hero' />
           
        </div>
    </div>
  )
}
