'use client'
import React from 'react'

import useSubscribersData from '@/shared/hooks/useSubscribersData';


const SubscribersData = () => {
  //if you are using a custom hook then , where you are using it that must be a client side component i.e 'use client'
    const {data, loading} = useSubscribersData();
    console.log(data);
  return (
    <div>SubscribersData</div>
  )
}

export default SubscribersData