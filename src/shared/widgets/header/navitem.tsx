import React from 'react'
import {navItems} from '@/configs/constants'
import Link from 'next/link'

const NavItem = () => {
  return (
    <div className='w-full hidden md:flex items-center gap-6'>
      {
         navItems.map((item:NavItems, i:number)=>{
          return <Link key={i} href={'/'}>{item?.title}</Link>
         })
      }
    </div>
  )
}

export default NavItem