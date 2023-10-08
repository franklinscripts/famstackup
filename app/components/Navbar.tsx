'use client'

import Image from "next/image"
import Logo from '@/public/logo.png'
import Link from "next/link"
import Menu from '@/public/menu.svg'
import { useState } from 'react'
import LoginModal from "./LoginModal"
import RegisterModal from "./RegisterModal"

export default function Navbar() {
  const [navShow, setNavShow] = useState(false)

  return (
    <div className="flex items-center justify-between px-4 z-[-999px] top-0 w-full " >
        <div>
            <Image src={Logo} alt="image-logo" className="w-[100px]"/>
            
        </div>
        
          <div className="hidden sm:flex flex-row gap-12 items-center text-black text-[16px] " >
            <Link href={''} >Contact</Link>
            <Link href={''} >
              <LoginModal className=" bg-inherit" text="Login" />
            </Link>
            <Link href={''} className="border border-orange-500 hover:bg-orange-500 hover:text-white px-12 py-2 rounded-[5px]" >
            <RegisterModal className=" bg-inherit" text="Sign Up" />
            </Link>
          </div>
        
        {navShow && (
          <div className="sm:hidden ">
            <div className="flex flex-col  gap-4 items-center text-black text-[14px]  p-[4em]   absolute top-8 bg-slate-100  border  border-black border-opacity-10 rounded-2xl right-16">
            <Link href={''} >
              <LoginModal className=" bg-inherit" text="Login" />
            </Link>
            <Link href={''}  >
            <RegisterModal className=" bg-inherit" text="Sign Up" />
            </Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
        )}
        <div className="sm:hidden block cursor-pointer" onClick={() => setNavShow(prevState => !prevState)}>
          <Image src={Menu} alt="image"  />
        </div>
        {/* Responsive Navigation */}
         

    </div>
  )
}
