'use client';
import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import DashboardItems from './dashboarditems';
import { ICONS } from '@/shared/utils/icons';
import UserPlan from './userplan';
const Sidebar = () => {
  const [bottomContent, setBottomContent] = useState<boolean>(false);
  const { user } = useUser();
  return (
    <div className='p-2'>
      <div className='p-2 flex items-center bg-[#f5f5f5f5] rounded mb-4'>
        <span className='text-2xl'>{ICONS.home}</span>
        <h5 className='pl-2 pt-1 capitalize'>{user?.username} Newsletter</h5>
      </div>
      <div>
        <DashboardItems />
        <UserPlan />
        <DashboardItems bottomContent={true} />
      </div>
    </div>
  );
};

export default Sidebar;
