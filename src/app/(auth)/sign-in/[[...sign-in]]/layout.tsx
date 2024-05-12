import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Quizmify',
  description: 'Explorer Quizmify',
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
