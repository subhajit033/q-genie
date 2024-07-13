import React from 'react';
import useRouteChange from '@/shared/hooks/useRouteChange';
import { useClerk } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname, redirect } from 'next/navigation';
import { sideBarBottomItems, sideBarItems } from '@/configs/constants';
import { ICONS } from '@/shared/utils/icons';

const DashboardItems = ({ bottomContent }: { bottomContent?: boolean }) => {
  const { user, signOut } = useClerk();
  const { activeRoute, setActiveRoute } = useRouteChange();
  const pathname = usePathname();
  return (
    <>
      {!bottomContent ? (
        <>
          {sideBarItems.map((item: DashboardSideBarTypes, index: number) => (
            <Link
              key={index}
              href={item.url}
              className='p-2 py-3 flex items-center'
            >
              <span
                className={`text-xl font-bold mr-2 ${
                  item.url === activeRoute && 'text-[#463bbd]'
                }`}
              >
                {item.icon}
              </span>
              <span
                className={`text-xl mr-2 ${
                  item.url === activeRoute && 'text-[#463bbd]'
                }`}
              >
                {item.title}
              </span>
            </Link>
          ))}
        </>
      ) : (
        <>
          {sideBarBottomItems.map(
            (item: DashboardSideBarTypes, index: number) => (
              <Link
                key={index}
                className='p-2 py-3 flex items-center'
                href={
                  item.url === '/'
                    ? `/subscribe?username=${user?.username}`
                    : item.url
                }
              >
                <span
                  className={`text-xl font-bold mr-2 ${
                    item.url === activeRoute && 'text-[#463bbd]'
                  }`}
                >
                  {item.icon}
                </span>
                <span
                  className={`text-xl mr-2 ${
                    item.url === activeRoute && 'text-[#463bbd]'
                  }`}
                >
                  {item.title}
                </span>
              </Link>
            )
          )}
          {/* sign out */}
          <div
            className='p-2 py-5 flex items-center cursor-pointer border-b'
            onClick={() => {
              signOut(), redirect('/sign-in');
            }}
          >
            <span className='text-xl mr-2'>{ICONS.logOut}</span>
            <span className='text-xl'>Sign Out</span>
          </div>
          {/* footer */}
          <br />
          <br />
          <div className='w-full flex justify-center cursor-pointer'>
            {/* <SidebarFotterLogo /> */}
          </div>
          <p className='text-sm text-center pt-5 pb-10'>
            © 2024 BuzzLetter, Inc. All rights reserved.
          </p>
        </>
      )}
    </>
  );
};

export default DashboardItems;
