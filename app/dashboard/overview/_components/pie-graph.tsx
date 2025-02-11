'use client';

import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

const data = [
  { name: 'Training', value: 35, color: '#7c3aed' },
  { name: 'Inference', value: 25, color: '#64748b' },
  { name: 'Fine-tuning', value: 20, color: '#f59e0b' },
  { name: 'Data Processing', value: 15, color: '#8b5cf6' },
  { name: 'Evaluation', value: 5, color: '#ec4899' }
];

export function PieGraph() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Workload Distribution</CardTitle>
        <CardDescription>
          Current AI task allocation across clusters
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="h-[240px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={60}
                  paddingAngle={2}
                >
                  {data.map((entry) => (
                    <Cell
                      key={entry.name}
                      fill={entry.color}
                      stroke="transparent"
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {data.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <div className="text-sm text-muted-foreground">
                  {item.name}: {item.value}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
