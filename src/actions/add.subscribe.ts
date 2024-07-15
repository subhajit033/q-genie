'use server';
import { connectToDB } from '@/database/db';
import Subscriber from '@/database/models/subscribers.model';
import { clerkClient } from '@clerk/nextjs/server';
import { validateEmail } from '@/shared/utils/zero-bounce';

export const subscribe = async ({
  email,
  username,
}: {
  email: string;
  username: string;
}) => {
  try {
    /**
     * user may share the sunscriber page with it's audience , and only  way to get details which is it's owner is the username in its searc paramas
     * first get all the regiser user from clerk and then filter the user matcher with usernmae
     * then check if the subscriber already subscribesd this news letter or not
     */
    await connectToDB();
    const userListResponse = await clerkClient.users.getUserList();
    const allUsers = userListResponse.data;
    const owner = allUsers.find((i) => i.username === username);
    if (!owner) {
      throw new Error('username is not valid');
    }
    const isSubscriberExist = await Subscriber.findOne({
      email,
      newsLetterOwnerId: owner?.id,
    });
    if (isSubscriberExist) {
      return { error: 'Email already exist' };
    }
    //validate email
    const validationRes = await validateEmail({ email });
    if (validationRes.status === 'invalid') {
      return { error: 'Email not valid' };
    }
    const subs = await Subscriber.create({
      email,
      newsLetterOwnerId: owner?.id,
    });
    return JSON.parse(JSON.stringify(subs));
  } catch (error) {
    console.log(error);
    return { error: 'Error occoured!' };
  }
};
