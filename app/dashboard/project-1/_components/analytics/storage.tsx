'use client';

import { Card } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const storageData = [
  { name: 'Model Weights', value: 128 },
  { name: 'Training Data', value: 64 },
  { name: 'Cached Results', value: 32 },
  { name: 'System', value: 16 }
];

const COLORS = [
  'hsl(var(--primary))',
  'hsl(var(--primary)/0.8)',
  'hsl(var(--primary)/0.6)',
  'hsl(var(--primary)/0.4)'
];

export function StorageAnalytics() {
  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-medium">Storage Distribution</h2>
          <p className="text-sm text-muted-foreground">
            Storage allocation by category
          </p>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={storageData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {storageData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend
                verticalAlign="bottom"
                height={36}
                formatter={(value) => <span className="text-sm">{value}</span>}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm font-medium text-muted-foreground">
              Total Storage
            </div>
            <div className="text-2xl font-bold">240GB</div>
          </div>
          <div>
            <div className="text-sm font-medium text-muted-foreground">
              Available
            </div>
            <div className="text-2xl font-bold">48GB</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
