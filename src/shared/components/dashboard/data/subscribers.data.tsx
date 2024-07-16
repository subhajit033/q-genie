'use client';
import React, { useEffect, useState } from 'react';
import useSubscribersData from '@/shared/hooks/useSubscribersData';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from '@nextui-org/react';

const SubscribersData = () => {
  const { data, loading } = useSubscribersData();

  //everything depened on any array or any type oject must be maintained a state
  const [rows, setRows] = useState<any>([]);

  const formatDate = (dateVal: string) => {
    const date = new Date(dateVal);
    return date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
  };

  useEffect(() => {
    if (data && data.length > 0) {
      const formattedRows = data.map((user: any) => ({
        key: user?._id,
        email: user?.email,
        createdAt: formatDate(user?.createdAt),
        source: user?.source,
        status: user?.status,
      }));
      setRows(formattedRows);
    }
  }, [data]);

  const columns = [
    { key: 'email', label: 'Email' },
    { key: 'createdAt', label: 'Subscribed At' },
    { key: 'source', label: 'Source' },
    { key: 'status', label: 'Status' },
  ];

  if (loading) return <h1>Loading...</h1>;

  return (
    <Table aria-label='Example table with dynamic content'>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item: any) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default SubscribersData;