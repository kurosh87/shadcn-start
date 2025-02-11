'use client';

import { Card } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

const performanceData = [
  { time: '00:00', latency: 120, throughput: 850 },
  { time: '04:00', latency: 115, throughput: 920 },
  { time: '08:00', latency: 130, throughput: 880 },
  { time: '12:00', latency: 125, throughput: 900 },
  { time: '16:00', latency: 118, throughput: 950 },
  { time: '20:00', latency: 122, throughput: 910 },
  { time: 'Now', latency: 119, throughput: 930 }
];

export function PerformanceMetrics() {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-medium">Performance Metrics</h2>
          <p className="text-sm text-muted-foreground">
            Latency and throughput over time
          </p>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={performanceData}
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
                yAxisId="left"
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
                unit="ms"
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
                unit="/min"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  borderColor: 'hsl(var(--border))',
                  borderRadius: '6px'
                }}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="latency"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={false}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="throughput"
                stroke="hsl(var(--primary)/0.5)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-muted-foreground">
              Avg Latency
            </div>
            <div className="text-2xl font-bold">119ms</div>
          </div>
          <div>
            <div className="text-sm font-medium text-muted-foreground">
              Throughput
            </div>
            <div className="text-2xl font-bold">930/min</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
