import { useState, useEffect } from 'react';
import client from '../config/sanityClient';

export function useSanityContent<T>(query: string): {
  data: T | null;
  error: string | null;
  loading: boolean;
} {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result: T = await client.fetch(query); // Ensure `T` matches query response shape
        console.log('Sanity Query Result:', result);

        setData(result || null); // Update to accommodate non-array results
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load content. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, error, loading };
}


export function useSanityContentArray<T>(query: string): {
    data: T[];
    error: string | null;
    loading: boolean;
  } {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result: T[] = await client.fetch(query); // Ensure `T[]` matches array query response
          setData(Array.isArray(result) ? result : []); // Ensure data is an array
        } catch (error) {
          console.error('Error fetching data:', error);
          setError('Failed to load content. Please try again later.');
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [query]);
  
    return { data, error, loading };
  }
  
