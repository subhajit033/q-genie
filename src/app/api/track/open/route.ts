import { NextRequest, NextResponse } from 'next/server';
import { addTracking } from '@/actions/add.tracking';

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get('userId');
  console.log(query);
  try {
    await addTracking(query as string);
    return NextResponse.json(
        {
          status: true,
        },
        { status: 200 }
      );
  } catch (e) {
    return NextResponse.json(
      {
        status: false,
      },
      { status: 400 }
    );
  }
  
};
