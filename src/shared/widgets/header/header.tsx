import Link from 'next/link'
import React from 'react'
import Logo from './logo'
import NavItem from './navitem'
import ToolBar from './toolbar'
const Header = () => {
  return (
    <header className='w-full sticky top-0 left-0 z-[999] border-b border-b[#000] px-10 flex items-center justify-between h-[80px] bg-white text-black'>
      <Link href={'/'}>
        <Logo />
      </Link>
      <div>
        <NavItem />
      </div>
      <div>
        <ToolBar />
      </div>
    </header>
  )
}

export default Header