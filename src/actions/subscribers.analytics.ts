"use server"
import Subscriber from "@/database/models/subscribers.model"
import { connectToDB } from "@/database/db"
import { generateSimpleAnalytics } from "@/shared/utils/analytics.generator"

export const getSubscribersAnalytics = async (userId: string)=>{
    try {
        await connectToDB();
        const data = await generateSimpleAnalytics(Subscriber, userId);
        return JSON.parse(JSON.stringify(data));
        
    } catch (error) {
        console.log(error);
        
    }

}