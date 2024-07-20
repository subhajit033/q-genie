'use server'
import { generateSimpleAnalytics } from "@/shared/utils/analytics.generator"
import { connectToDB } from "@/database/db"
import Tracking from "@/database/models/tracking.model"
// import { currentUser } from "@clerk/nextjs/server"

export const getTrackingDetails = async (userId:string)=>{
    try {
        // const user = await currentUser();
        await connectToDB();
        const results = await generateSimpleAnalytics(Tracking, userId);
        return JSON.parse(JSON.stringify(results));
    } catch (e) {
        console.log(e);
        
    }
}