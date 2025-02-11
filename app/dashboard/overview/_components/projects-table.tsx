'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ChevronRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// Add usage history data for each project
const projects = [
  {
    name: '3dEYE',
    status: 'OK',
    software: 'PyTorch, CUDA',
    usage: {
      gpu: 45,
      ram: 38
    },
    usageHistory: [
      { gpu: 42, ram: 35 },
      { gpu: 45, ram: 38 },
      { gpu: 43, ram: 36 },
      { gpu: 47, ram: 39 },
      { gpu: 45, ram: 38 }
    ],
    cost: '$123/hour',
    color: '#7c3aed',
    initials: '3E',
    image: '/avatars/01.png'
  },
  {
    name: '70B F-tune',
    status: 'OK',
    software: 'TensorFlow, CUDA',
    usage: {
      gpu: 85,
      ram: 72
    },
    usageHistory: [
      { gpu: 82, ram: 70 },
      { gpu: 88, ram: 75 },
      { gpu: 83, ram: 71 },
      { gpu: 87, ram: 74 },
      { gpu: 85, ram: 72 }
    ],
    cost: '$342/hour',
    color: '#64748b',
    initials: 'FT',
    image: '/avatars/02.png'
  },
  {
    name: 'GrubHub Project',
    status: 'OK',
    software: 'PyTorch, TPU',
    usage: {
      gpu: 35,
      ram: 28
    },
    usageHistory: [
      { gpu: 32, ram: 26 },
      { gpu: 38, ram: 30 },
      { gpu: 34, ram: 27 },
      { gpu: 37, ram: 29 },
      { gpu: 35, ram: 28 }
    ],
    cost: '$89/hour',
    color: '#f59e0b',
    initials: 'GP',
    image: '/avatars/03.png'
  },
  {
    name: 'Lightspeed_Demo',
    status: 'OK',
    software: 'JAX, TPU',
    usage: {
      gpu: 55,
      ram: 48
    },
    usageHistory: [
      { gpu: 52, ram: 46 },
      { gpu: 58, ram: 50 },
      { gpu: 54, ram: 47 },
      { gpu: 57, ram: 49 },
      { gpu: 55, ram: 48 }
    ],
    cost: '$156/hour',
    color: '#8b5cf6',
    initials: 'LD',
    image: '/avatars/04.png'
  },
  {
    name: 'LLM_Inference',
    status: 'OK',
    software: 'PyTorch, CUDA',
    usage: {
      gpu: 65,
      ram: 58
    },
    usageHistory: [
      { gpu: 62, ram: 56 },
      { gpu: 68, ram: 60 },
      { gpu: 64, ram: 57 },
      { gpu: 67, ram: 59 },
      { gpu: 65, ram: 58 }
    ],
    cost: '$234/hour',
    color: '#ec4899',
    initials: 'LI',
    image: '/avatars/05.png'
  },
  {
    name: 'Nebula_Endpoint',
    status: 'OK',
    software: 'TensorFlow, CUDA',
    usage: {
      gpu: 40,
      ram: 35
    },
    usageHistory: [
      { gpu: 37, ram: 33 },
      { gpu: 43, ram: 37 },
      { gpu: 39, ram: 34 },
      { gpu: 42, ram: 36 },
      { gpu: 40, ram: 35 }
    ],
    cost: '$178/hour',
    color: '#06b6d4',
    initials: 'NE',
    image: '/avatars/06.png'
  },
  {
    name: 'Nebula_Inference',
    status: 'OK',
    software: 'PyTorch, CUDA',
    usage: {
      gpu: 40,
      ram: 35
    },
    usageHistory: [
      { gpu: 37, ram: 33 },
      { gpu: 43, ram: 37 },
      { gpu: 39, ram: 34 },
      { gpu: 42, ram: 36 },
      { gpu: 40, ram: 35 }
    ],
    cost: '$167/hour',
    color: '#10b981',
    initials: 'NI',
    image: '/avatars/07.png'
  },
  {
    name: 'RadiumDeploy',
    status: 'OK',
    software: 'JAX, TPU',
    usage: {
      gpu: 75,
      ram: 68
    },
    usageHistory: [
      { gpu: 72, ram: 66 },
      { gpu: 78, ram: 70 },
      { gpu: 74, ram: 67 },
      { gpu: 77, ram: 69 },
      { gpu: 75, ram: 68 }
    ],
    cost: '$289/hour',
    color: '#f43f5e',
    initials: 'RD',
    image: '/avatars/08.png'
  }
];

function MiniChart({ data, color }: { data: any[]; color: string }) {
  return (
    <div className="h-8 w-24">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <Area
            type="monotone"
            dataKey="gpu"
            stroke={color}
            fill={color}
            fillOpacity={0.2}
            strokeWidth={1}
          />
          <Area
            type="monotone"
            dataKey="ram"
            stroke={color}
            fill={color}
            fillOpacity={0.1}
            strokeWidth={1}
            strokeOpacity={0.6}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ProjectsTable() {
  return (
    <div className="rounded-lg border bg-background/50">
      <div className="w-full">
        <div className="grid grid-cols-5 gap-4 p-4 text-sm font-medium text-muted-foreground">
          <div>Project Name</div>
          <div>Status</div>
          <div>Software</div>
          <div>Current Usage Averages</div>
          <div className="text-right">Cost</div>
        </div>
        <div className="divide-y divide-border">
          {projects.map((project) => (
            <Link
              key={project.name}
              href={`/dashboard/project-1`}
              className="grid grid-cols-5 items-center gap-4 p-4 text-sm transition-colors hover:bg-muted/50"
            >
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    'flex h-8 w-8 items-center justify-center rounded-full text-white',
                    {
                      'bg-blue-500': project.name === '3dEYE',
                      'bg-purple-500': project.name === '70B F-tune',
                      'bg-amber-500': project.name === 'GrubHub Project',
                      'bg-violet-500': project.name === 'Lightspeed_Demo',
                      'bg-pink-500': project.name === 'LLM_Inference',
                      'bg-cyan-500': project.name === 'Nebula_Endpoint',
                      'bg-emerald-500': project.name === 'Nebula_Inference',
                      'bg-rose-500': project.name === 'RadiumDeploy'
                    }
                  )}
                >
                  {project.name.substring(0, 2)}
                </div>
                <span className="font-medium">{project.name}</span>
              </div>
              <div>
                <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-500">
                  {project.status}
                </span>
              </div>
              <div>{project.software}</div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-purple-500" />
                  <span>{project.usage.gpu}% GPU</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span>{project.usage.ram}% RAM</span>
                </div>
              </div>
              <div className="flex items-center justify-end gap-2">
                <span>${project.cost}/hour</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M7.5 17.5L15 10L7.5 2.5" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
