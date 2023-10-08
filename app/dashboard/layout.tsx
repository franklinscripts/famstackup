import React from 'react'
import Link from 'next/link'
import Sidebar from '../components/Sidebar'
import SideNav from '../components/SideNav'
export default function DashboardLayout({children}: {
    children: React.ReactNode
}) {
  return (
    <aside className='flex m-12 p-6 gap-10'>
        <Sidebar />
        <div className=''>
        <SideNav />
        {children}
        </div>
    </aside>
  )
}
