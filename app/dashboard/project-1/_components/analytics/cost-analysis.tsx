'use client';

import { Card } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

const costData = [
  { time: 'Mon', cost: 234 },
  { time: 'Tue', cost: 245 },
  { time: 'Wed', cost: 267 },
  { time: 'Thu', cost: 252 },
  { time: 'Fri', cost: 248 },
  { time: 'Sat', cost: 229 },
  { time: 'Sun', cost: 238 }
];

export function CostAnalysis() {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-medium">Cost Analysis</h2>
          <p className="text-sm text-muted-foreground">Weekly cost breakdown</p>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={costData}
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
                unit="$"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  borderColor: 'hsl(var(--border))',
                  borderRadius: '6px'
                }}
              />
              <Bar
                dataKey="cost"
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
                maxBarSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-muted-foreground">
              Average Daily
            </div>
            <div className="text-2xl font-bold">$244.71</div>
          </div>
          <div>
            <div className="text-sm font-medium text-muted-foreground">
              Projected Monthly
            </div>
            <div className="text-2xl font-bold">$7,341</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
