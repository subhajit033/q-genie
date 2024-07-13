'use server';
import prisma from '@/lib/db';
import { handleError } from '@/shared/utils/errorHandler';

//generally next js are single page application , so we want to update some route after performing some operation and we can we use
//it anywhere after performing some operation, it will just revalidate that path
import { revalidatePath } from 'next/cache';
const { user } = prisma;

type CreateUserParams = {
  clerkId: string;
  email: string;
  username: string;
  firstName?: string;
  lastName?: string;
  photo?: string;
};

const createUser = async (userD: CreateUserParams) => {
  console.log('user craeted function run..');
  try {
    const newUser = await user.create({
      data: userD,
    });

    console.log('user craeted function run end ...');
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
};

type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string;
  photo: string;
};

const updateUser = async (clerkId: string, userData: UpdateUserParams) => {
  try {
    const updatedUser = await user.update({
      where: {
        clerkId,
      },
      data: userData,
    });

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
};

const deleteUser = async (clerkId: string) => {
  try {
    const e_user = await user.findUnique({
      where: {
        clerkId,
      },
    });

    if (!e_user) {
      throw new Error('No user found!!');
    }

    const deletedUser = await user.delete({
      where: {
        clerkId,
      },
    });
    revalidatePath('/');

    return deletedUser ? JSON.parse(JSON.stringify(deleteUser)) : null;
  } catch (error) {
    handleError(error);
  }
};

export { createUser, updateUser, deleteUser };
