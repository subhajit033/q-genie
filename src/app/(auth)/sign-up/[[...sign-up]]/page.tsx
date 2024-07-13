import React from 'react';
import { SignUp } from '@clerk/nextjs';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up | BuzzLetter',
};

const page = () => {
  return <SignUp path='/sign-up' />;
};

export default page;
