// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'
import { useUser } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import Sidebar from '../widgets/dashboard/sidebar/sidebar'

export default function Providers({children}: { children: React.ReactNode }) {
  const {isLoaded} = useUser()
  const pathname = usePathname();
  if(!isLoaded){
    return null;
  }
  return (
    <NextUIProvider>
    {pathname !== "/dashboard/new-email" &&
    pathname !== "/" &&
    pathname !== "/sign-up" &&
    pathname !== "/subscribe" &&
    pathname !== "/success" &&
    pathname !== "/sign-in" ? (
      <div className="w-full flex">
        <div className="w-[290px] h-screen overflow-y-scroll">
          <Sidebar />
        </div>
        {children}
      </div>
    ) : (
      <>{children}</>
    )}
    
  </NextUIProvider>
  )
}