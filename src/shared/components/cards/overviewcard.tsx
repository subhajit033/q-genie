'use client'
import React from 'react'
import useSubscribersAnalytics from '@/shared/hooks/useSubscriberAnalytics';
import useGetTrackDetails from '@/shared/hooks/useGetTrackDetails';
import { Spinner } from '@nextui-org/react';
import { ICONS } from '@/shared/utils/icons';

const DashboardOverviewCard = () => {
  const {loading, subscribersData} = useSubscribersAnalytics();
  const {data, countLoading} = useGetTrackDetails();
  console.log(data);
  const lastMonthCount = !countLoading && data?.lastSixMonths?.[data?.lastSixMonths?.length - 1].count;
  //AAs it is a hook so initially the data is unsefied so checking property on that giving error so when loading is done then only loading perfor operation on data 
  const lastMonthSubs = !loading &&  subscribersData?.lastSixMonths?.[subscribersData?.lastSixMonths?.length - 1].count;
  const previousLastMonthSubscribers =
    !loading &&
    subscribersData?.lastSixMonths[subscribersData?.lastSixMonths?.length - 2];

  let comparePercentage = 0;

  if (previousLastMonthSubscribers.count > 0) {
    comparePercentage =
      ((lastMonthSubs - previousLastMonthSubscribers) /
        previousLastMonthSubscribers) *
      100;
  } else {
    comparePercentage = 100;
  }
    return (
        <div className="w-full xl:py-4 flex bg-white border rounded">
          {/* subscribers */}
          <div className="w-[33.33%] border-r p-5 text-lg">
            <h5 className="text-lg">Subscribers</h5>
            <div className="w-full flex items-center justify-between">
              <span className="font-medium pt-2">
                {loading ? <Spinner size="sm" /> : lastMonthSubs}
              </span>
              <div className="h-[30px] flex p-2 items-center bg-[#DCFCE6] rounded-full">
                <span className="text-[#21C55D]">{ICONS.topArrow}</span>
                <span className="text-sm pl-1">{comparePercentage}%</span>
              </div>
            </div>
            <small className="block text-sm opacity-[.7] pt-2">
              from 0 (last 4 weeks)
            </small>
          </div>
          {/* Open Rate */}
          <div className="w-[33.33%] border-r p-5 text-lg">
            <h5 className="text-lg">Open Rate</h5>
            <div className="w-full flex items-center justify-between">
              <span className="font-medium pt-2">{countLoading? <Spinner size='sm' />: lastMonthCount}</span>
              <div className="h-[30px] flex p-3 items-center bg-[#F3F4F6] rounded-full">
                <span className="text-xl">-</span>
                <span className="text-sm pl-1">0%</span>
              </div>
            </div>
            <small className="block text-sm opacity-[.7] pt-2">
              from 0 (last 4 weeks)
            </small>
          </div>
          {/* Click Rate */}
          <div className="w-[33.33%] border-r p-5 text-lg">
            <h5 className="text-lg">Click Rate</h5>
            <div className="w-full flex items-center justify-between">
              <span className="font-medium pt-2">0</span>
              <div className="h-[30px] flex p-3 items-center bg-[#F3F4F6] rounded-full">
                <span className="text-xl">-</span>
                <span className="text-sm pl-1">0%</span>
              </div>
            </div>
            <small className="block text-sm opacity-[.7] pt-2">
              from 0 (last 4 weeks)
            </small>
          </div>
        </div>
      );
}

export default DashboardOverviewCard