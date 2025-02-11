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

const trafficData = [
  { month: 'Jan', inbound: 45, outbound: 38 },
  { month: 'Feb', inbound: 52, outbound: 42 },
  { month: 'Mar', inbound: 78, outbound: 65 },
  { month: 'Apr', inbound: 85, outbound: 72 },
  { month: 'May', inbound: 92, outbound: 84 },
  { month: 'Jun', inbound: 68, outbound: 62 }
];

export function TrafficAnalytics() {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-medium">Network Traffic</h2>
          <p className="text-sm text-muted-foreground">
            Monthly inbound and outbound traffic (TB)
          </p>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={trafficData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient
                  id="inboundGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity={0.2}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity={0}
                  />
                </linearGradient>
                <linearGradient
                  id="outboundGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity={0.1}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(var(--primary))"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="hsl(var(--border))"
              />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
                unit=" TB"
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
                dataKey="inbound"
                stroke="hsl(var(--primary))"
                fill="url(#inboundGradient)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="outbound"
                stroke="hsl(var(--primary)/0.5)"
                fill="url(#outboundGradient)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-muted-foreground">
              Total Inbound
            </div>
            <div className="text-2xl font-bold">420TB</div>
          </div>
          <div>
            <div className="text-sm font-medium text-muted-foreground">
              Total Outbound
            </div>
            <div className="text-2xl font-bold">363TB</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
