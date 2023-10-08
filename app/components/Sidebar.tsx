import React from 'react'
import Link from 'next/link'
import { Image } from 'next/dist/client/image-component'
import styles from '@/app/components/global.module.css'


export default function Sidebar() {

  return (
    <div>

    <div className='md:flex flex-col gap-8 w-[300px] bg-black text-white rounded-3xl h-[70vh] p-8 hidden'>
            <span>Main Menu</span>
            <Link  href={'/dashboard/welcome'} className={` ${styles.focus} flex items-center gap-6 text-slate-300 `}>
               <Image src={'/Category.svg'} alt='img' width={30}  height={20}/>
               Dashboard 
            </Link>
            <Link  href={'/dashboard/tasks'} className={` ${styles.focus} flex items-center gap-6 text-slate-300 `}>
               <Image src={'/task.svg'} alt='img' width={30} height={20} />
               Tasks 
            </Link>
            <Link  href={'/dashboard/refferals'} className={` ${styles.focus} flex items-center gap-6 text-slate-300 `}>
               <Image src={'/account.svg'} alt='img' width={30} height={20}/>
               Refferals 
            </Link>
            <Link  href={'/dashboard/widthdraw'} className={` ${styles.focus} flex items-center gap-6 text-slate-300 `}>
               <Image src={'/Upload.svg'} alt='img' width={30} height={20}/>
               Withdraw 
            </Link>
    </div>
    <div className='flex flex-row gap-8 md:hidden fixed z-10 bottom-0 left-0 h-[50px text-[14px] bg-white w-full items-center justify-between px-4 py-2 border-t border-slate-300'>
            <Link  href={'/dashboard/welcome'} className='flex flex-col items-center text-[12px]'>
               <Image src={'/Category.svg'} alt='img' width={20} height={20}/>
               Dashboard 
            </Link>
            <Link  href={'/dashboard/tasks'} className='flex flex-col items-center text-[12px]'>
               <Image src={'/task.svg'} alt='img' width={20} height={20}/>
               Tasks 
            </Link>
            <Link  href={'/dashboard/refferals'} className='flex flex-col items-center text-[12px]'>
               <Image src={'/account.svg'} alt='img' width={20} height={20}/>
               Refferals 
            </Link>
            <Link  href={'/dashboard/widthdraw'} className='flex flex-col items-center text-[12px]'>
               <Image src={'/Upload.svg'} alt='img' width={20} height={20}/>
               Withdraw 
            </Link>
    </div>
    </div>
  )
}
