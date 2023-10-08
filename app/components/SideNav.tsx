import React from 'react'
import { Image } from 'next/dist/client/image-component'
export default function SideNav() {
  return (
    <div className='flex items-center absolute top-0 left-0 justify-between w-full bg-black text-white  md:hidden px-4 py-1'>
        <Image src={'/logo.png'} alt='img' width={60} height={30}/> 
        <div className='w-[50[px] h-[50px] rounded-full '>
            <Image src={'/singlePerson.svg'} alt='img' width={60} height={30} />
         
        </div> 
    </div>
  )
}
