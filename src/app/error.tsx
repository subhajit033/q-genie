'use client'; // Error components must be Client Components

import { useEffect } from 'react';
import { useState } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [err, setErr] = useState('');
  useEffect(() => {
    // Log the error to an error reporting service
    setErr(JSON.stringify(error));
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <h2>{err}</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
