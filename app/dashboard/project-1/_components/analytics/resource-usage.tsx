'use client';

import { Card } from '@/components/ui/card';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

// Sample data for each resource
const resourceDataMap = {
  'sfo-01': [
    { time: '00:00', gpu: 45, memory: 38 },
    { time: '04:00', gpu: 52, memory: 42 },
    { time: '08:00', gpu: 58, memory: 45 },
    { time: '12:00', gpu: 65, memory: 58 },
    { time: '16:00', gpu: 61, memory: 52 },
    { time: '20:00', gpu: 58, memory: 49 },
    { time: 'Now', gpu: 57.1, memory: 49.3 }
  ],
  'sfo-03': [
    { time: '00:00', gpu: 65, memory: 48 },
    { time: '04:00', gpu: 72, memory: 52 },
    { time: '08:00', gpu: 78, memory: 55 },
    { time: '12:00', gpu: 85, memory: 68 },
    { time: '16:00', gpu: 81, memory: 62 },
    { time: '20:00', gpu: 78, memory: 59 },
    { time: 'Now', gpu: 77.1, memory: 59.3 }
  ],
  'sfo-05': [
    { time: '00:00', gpu: 35, memory: 28 },
    { time: '04:00', gpu: 42, memory: 32 },
    { time: '08:00', gpu: 48, memory: 35 },
    { time: '12:00', gpu: 55, memory: 48 },
    { time: '16:00', gpu: 51, memory: 42 },
    { time: '20:00', gpu: 48, memory: 39 },
    { time: 'Now', gpu: 47.1, memory: 39.3 }
  ]
};

interface ResourceUsageTimelineProps {
  resourceId: string;
}

export function ResourceUsageTimeline({
  resourceId
}: ResourceUsageTimelineProps) {
  const resourceData = resourceDataMap[resourceId] || resourceDataMap['sfo-01'];
  const currentGPU = resourceData[resourceData.length - 1].gpu;
  const currentMemory = resourceData[resourceData.length - 1].memory;

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-medium">Resource Usage</h2>
          <p className="text-sm text-muted-foreground">
            24-hour GPU and Memory utilization
          </p>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={resourceData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="hsl(var(--border))"
              />
              <XAxis
                dataKey="time"
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
                domain={[0, 100]}
                unit="%"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  borderColor: 'hsl(var(--border))',
                  borderRadius: '6px'
                }}
              />
              <Area
                type="monotone"
                dataKey="gpu"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="memory"
                stroke="hsl(var(--primary)/0.5)"
                fill="hsl(var(--primary))"
                fillOpacity={0.1}
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-muted-foreground">
              Current GPU
            </div>
            <div className="text-2xl font-bold">{currentGPU}%</div>
          </div>
          <div>
            <div className="text-sm font-medium text-muted-foreground">
              Current Memory
            </div>
            <div className="text-2xl font-bold">{currentMemory}%</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
