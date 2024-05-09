import prisma from '@/lib/db';

const { user } = prisma;

interface userDetails {
  clerkId: string;
  username: string;
//   password: string | null;
  firstName: string | null;
  lastName: string | null;
  photo: string | null;
}

const createUser = async (userD: userDetails) => {
  try {
    const newUser = await user.create({
      data: userD,
    });
  } catch (error) {

    
  }
};

const updateUser = () => {};

const deleteUser = () => {};

export { createUser, updateUser, deleteUser };
