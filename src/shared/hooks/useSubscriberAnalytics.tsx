"use client";
import { useClerk } from "@clerk/nextjs";

import { getSubscribersAnalytics } from "@/actions/subscribers.analytics";
import { useEffect, useState } from "react";

const useSubscribersAnalytics = () => {
    const {user} = useClerk();
  const [subscribersData, setSubscribersData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    user && SubscribersAnalytics();
  }, [user]);

  const SubscribersAnalytics = async () => {
    await getSubscribersAnalytics(user?.id as string).then((res: any) => {
      setSubscribersData(res);
      
      setLoading(false);
    });
  };

  return { subscribersData, loading };
};

export default useSubscribersAnalytics;
