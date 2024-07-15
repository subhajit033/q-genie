'use client'
import {useState, useEffect} from 'react'
import { getSubscriber } from '@/actions/get.subscriber'
import { useClerk } from '@clerk/nextjs'

const useSubscribersData = () => {
    const[data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const {user} = useClerk();
    useEffect(()=>{
        user && getAllSubscribers();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    const getAllSubscribers = async ()=>{
        try {
            const allSubs = await getSubscriber(user?.id as string);
            setData(allSubs)
            setLoading(false)
            
        } catch (error) {
            console.log(error);
            setLoading(false)
            
        }
    }
  return {data,loading}
}

export default useSubscribersData