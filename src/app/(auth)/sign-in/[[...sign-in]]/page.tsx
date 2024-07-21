import { SignIn } from '@clerk/nextjs';
import { type Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
  title: 'Login | BuzzLetter',
};

const page = () => {
  return <SignIn path='/sign-in' />;
};

export default page;
