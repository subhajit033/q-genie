'use server'
import { connectToDB } from '@/database/db';
import Tracking from '@/database/models/tracking.model';

export const addTracking = async (userId: string) => {
  try {
    await connectToDB();
    const res = await Tracking.findOne({ newsLetterOwnerId: userId });
    if (res) {
      await Tracking.findByIdAndUpdate(
        res?._id,
        { count: res?.count + 1 },
        {
          new: true,
          runValidators: true,
        }
      );
    }else{
        await Tracking.create({
            newsLetterOwnerId: userId
        })
    }
  } catch (e) {
    console.log(e);
  }
};
