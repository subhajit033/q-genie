'use server'

import { connectToDB } from "@/database/db"
import Tracking from "@/database/models/tracking.model"
// import { currentUser } from "@clerk/nextjs/server"

export const getTrackingDetails = async (userId:string)=>{
    try {
        // const user = await currentUser();
        await connectToDB();
        const currentDate = new Date();
        const startDate = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() - 0,
            1
          );
      
          // Calculate end of the month (last day)
          const endDate = new Date(
            startDate.getFullYear(),
            startDate.getMonth() + 1,
            1
          );
          const monthName = startDate.toLocaleString('default', {
            month: 'long',
            year: 'numeric',
          });
          const count = await Tracking.findOne({
            newsLetterOwnerId:userId,
            createdAt: {
              $gte: startDate,
              $lte: endDate,
            },
          });
       
        return JSON.parse(JSON.stringify({...count, monthName}));
    } catch (e) {
        console.log(e);
        
    }
}