import React from 'react'
import Write from '@/modules/dashboard/write/write'
import {type Metadata } from "next";

export const metadata:Metadata = {
  title: 'Write | Dashboard'
}
const page = () => {
  return (
   <Write />
  )
}

export default page