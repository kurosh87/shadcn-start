import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Dynamically import the client component
const Project1Page = dynamic(() => import('./_components/project-1'), {
  ssr: false,
  loading: () => <div>Loading...</div>
});

export const metadata: Metadata = {
  title: 'Dashboard | Project 1',
  description: 'Project management and resource monitoring dashboard'
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Project1Page />
    </Suspense>
  );
}
