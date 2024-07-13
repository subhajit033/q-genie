'use client';
import React from 'react';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

const ToolBar = () => {
  const router = useRouter();
  return (
    <div className='flex items-center gap-4'>
      <Button color='primary' className='text-lg'>
        Start trial
      </Button>
      <Button
        onClick={() => router.push('/sign-in')}
        color='primary'
        className='border border-black bg-transparent text-black'
      >
        Login
      </Button>
    </div>
  );
};

export default ToolBar;
