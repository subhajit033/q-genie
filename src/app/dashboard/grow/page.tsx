
import React from 'react'
import {type Metadata } from "next";

export const metadata:Metadata = {
  title: 'Grow | Dashboard'
}

const Page = () => {
  return (
    <h1 className='text-2xl font-semibold text-violet-500'>Detail analysis of your publication</h1>
  )
}

export default Page