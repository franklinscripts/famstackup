import React from 'react'
import Account from '@/public/contact.svg'
import Social from "@/public/mon.svg"
import Image from 'next/image'
import Tasks from "@/public/jobs.svg"
import Withdraw from "@/public/earn.svg"
import People from '@/public/people.svg'
import Check from '@/public/good.svg'
import Link from 'next/link'
const data = [
    {
        icon: Account,
        title: "Create an Account",
        desc: "Start by creating an account without any registration fee",

    },
    {
        icon: Social,
        title: "Link Social Media",
        desc: "Connect your different social media accounts to perform tasks",

    },
    {
        icon: Tasks,
        title: "Perform Tasks",
        desc: "Carry out tasks like posting  people’s ads and get paid for it",

    },
    {
        icon: Withdraw,
        title: 'Withdraw Earnings',
        desc:"Withdraw your earnings directly to your bank account easily",

    },
]
const earn = [
    {
        icon: Check,
        title: "Over 100 daily tasks",
    },
    {
        icon: Check,
        title: "Instant withdrawals",
    },
    {
        icon: Check,
        title: "No investment or signup fee required",
    },
]
export default function GetStarted() {
    
  return (
    <>
    <div className=' flex flex-col items-center justify-center mt-5'>
        <h3 className='text-[#FF7300] text-[18px] font-bold'>Get Started</h3>
        <span className='mt-2 text-[18px] leading-5 '>How To Start Earning</span>

        <div className='flex items-center justify-center flex-wrap p-6 '>
            {
                data.map(item => {
                    return (
                        <div className='flex items-center flex-col m-5 ' key={item.title}>
                            <Image src={item.icon} alt={item.title} className='w-[50px]'/>
                            <div className='text-center'>
                                <span className='text-[#FF7300] text-[16px] font-bold'>{item.title}</span>
                                <p className='w-[300px]'>{item.desc}</p>
                            </div>

                        </div>
                    )
                })
            }

        </div>

        
    </div>

    <div className='block sm:flex items-center justify-center lg:gap-7  p-4'>
        <Image src={People} alt='image' className=' p-4 lg:w-[700px] md:w-[500px] sm:w-[400px] w-full'/>
        <div className=' py-7'>
            <h1 className='text-[42px] mb-3 font-bold w-[80%]'>Earn money by helping other people grow</h1>
            <p className='text-[18px] mb-5 text-gray-400 w-[80%]'>Get paid by helping people grow, no investment or signup fee required</p>
            {
                earn.map(item => (
                    <div className='flex my-4 items-center gap-2' key={item.title}>
                        <Image src={item.icon} alt={item.title} />
                        <span>{item.title}</span>

                    </div>
                ))
            }
            {/* <Link href="/register">Get started</Link> */}
            <Link href={"/register"} className='text-[#FF7300] font-bold mt-5'>Get started</Link>


        </div>
        
    </div>
    </>
  )
}
