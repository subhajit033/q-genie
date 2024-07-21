import React from 'react';
import Dashboard from '@/modules/dashboard/dashboard';
import {type Metadata } from "next";

export const metadata:Metadata = {
  title: 'Dashboard | BuzzLetter'
}

const page = () => {
  return <Dashboard />;
};

export default page;
