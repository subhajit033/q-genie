'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { ICONS } from '@/shared/utils/icons'
import Emaileditor from '@/shared/editor/email.editor'

const Page = () => {
    const searchParams = useSearchParams()
 
    const subjectTitle = searchParams.get('subject') as string;
    
    return (
      <div className="w-full flex bg-[#F7F7F7]">
        <div className="w-full p-5 bg-white rounded-r-xl">
          {/* back arrow */}
          <Link
            href={"/dashboard/write"}
            className="opacity-[.7] w-min flex text-xl items-center"
          >
            <span>{ICONS.backArrow}</span>
            <span>Exit</span>
          </Link>
          {/* email editor */}
          <div className="my-5">
            <Emaileditor subjectTitle={subjectTitle} />
          </div>
        </div>
      </div>
    );
}

export default Page