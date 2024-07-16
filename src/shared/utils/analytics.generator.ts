import { Document, Model } from 'mongoose';


interface MonthData {
  month: string;
  count: number;
}

export async function generateSimpleAnalytics<T extends Document>(
  model: Model<T>, userId: string
): Promise<{ lastSixMonths: MonthData[] }> {
  const lastSixMonths: MonthData[] = [];
  const currentDate = new Date();
  // eslint-disable-next-line react-hooks/rules-of-hooks
 

  for (let i = 0; i < 7; i++) {
    // Calculate start of the month
    const startDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - i,
      1
    );

    // Calculate end of the month (last day)
    const endDate = new Date(
      startDate.getFullYear(),
      startDate.getMonth() + 1,
      1
    );

    // Format month name
    const monthName = startDate.toLocaleString('default', {
      month: 'long',
      year: 'numeric',
    });

    // Count documents for the month
    const count = await model.countDocuments({
      newsLetterOwnerId:userId,
      createdAt: {
        $gte: startDate,
        $lte: endDate,
      },
    });

    // Add to results
    lastSixMonths.unshift({ month: monthName, count });
  }

  return { lastSixMonths };
}
