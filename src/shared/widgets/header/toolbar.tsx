'use client';
import React from 'react';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';

const ToolBar = () => {
  const router = useRouter();
  const { isSignedIn, user } = useUser();
  return (
    <div className='flex items-center gap-4'>
      <Button color='primary' className='text-lg'>
        Start trial
      </Button>
      {isSignedIn ? (
        <Link href={'/dashboard'}>
          <Image
            src={user?.imageUrl}
            alt='avatar'
            width={40}
            height={40}
            className='rounded-full'
          />
        </Link>
      ) : (
        <Button
          onClick={() => router.push('/sign-in')}
          color='primary'
          className='border border-black bg-transparent text-black'
        >
          Login
        </Button>
      )}
    </div>
  );
};

export default ToolBar;
