'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import PageContainer from '@/components/layout/page-container';
import { Separator } from '@/components/ui/separator';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('./_components/map-component'), {
  ssr: false,
  loading: () => <p>Loading Map...</p>
});

interface DataItem {
  id: number;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  category: string;
}

const categoryColors: { [key: string]: string } = {
  Landmark: '#FF5733',
  'Historic Site': '#33FF57',
  Neighborhood: '#3357FF',
  Street: '#FF33F1',
  Architecture: '#33FFF1',
  Shopping: '#F1FF33',
  Viewpoint: '#FF3333',
  Museum: '#33FFFF'
};

export default function ExplorePage() {
  const [data, setData] = useState<DataItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('locations') // Replace 'locations' with your actual table name
          .select('*');

        if (error) throw error;
        setData(data || []);
      } catch (err) {
        setError('Failed to fetch data');
        console.error('Error fetching data:', err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <PageContainer>
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Explore San Francisco
            </h2>
            <p className="text-muted-foreground">
              Discover the city&apos;s landmarks and hidden gems
            </p>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="flex h-[calc(100vh-200px)]">
          <div className="w-1/3 overflow-y-auto pr-4">
            {isLoading && <p>Loading data...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!isLoading && !error && (
              <>
                <div className="mb-4 rounded-lg border p-4">
                  <h3 className="mb-2 font-bold">Category Legend</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(categoryColors).map(([category, color]) => (
                      <div key={category} className="flex items-center">
                        <div
                          className="mr-2 h-4 w-4 rounded-full"
                          style={{ backgroundColor: color }}
                        ></div>
                        <span className="text-sm">{category}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {data.map((item) => (
                  <div key={item.id} className="mb-4 rounded-lg border p-4">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.category}</p>
                    <p className="mt-2">{item.description}</p>
                  </div>
                ))}
              </>
            )}
          </div>
          <div className="w-2/3">
            <MapComponent data={data} />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
