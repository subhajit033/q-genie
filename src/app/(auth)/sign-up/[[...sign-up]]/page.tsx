import React from 'react';
import { SignUp } from '@clerk/nextjs';

const page = () => {
  return <SignUp path='/sign-up' />;
};

export default page;
