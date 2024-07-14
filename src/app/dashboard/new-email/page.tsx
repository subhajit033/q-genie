'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'

const Page = () => {
    const searchParams = useSearchParams()
 
    const search = searchParams.get('subject')
  return (
    <div>Page {search}</div>
  )
}

export default Page