'use client';
import { getTrackingDetails } from '@/actions/get.trackingDetails';
import { useState, useEffect } from 'react';
import { useClerk } from '@clerk/nextjs';
const useGetTrackDetails = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>([]);
  const { user } = useClerk();
  useEffect(()=>{
    user && TrackingDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const TrackingDetails = async () => {
    try {
      const res = await getTrackingDetails(user?.id as string);
      setData(res)
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };
  return { countLoading : loading, data };
};

export default useGetTrackDetails;
