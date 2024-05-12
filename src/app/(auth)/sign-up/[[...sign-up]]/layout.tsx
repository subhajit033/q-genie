import React from 'react';
import type { Metadata } from 'next';

export const metadata:Metadata = {
    title: 'Sign Up | Quizmify',
    description: 'Welcome to Quizmify'
}

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
