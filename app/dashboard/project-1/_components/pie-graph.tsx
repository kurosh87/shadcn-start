'use client';

import * as React from 'react';
import { TrendingUp } from 'lucide-react';
import { Label, Pie, PieChart } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

const chartData = [
  { category: 'Frontend', tasks: 275, fill: 'var(--color-frontend)' },
  { category: 'Backend', tasks: 200, fill: 'var(--color-backend)' },
  { category: 'Design', tasks: 187, fill: 'var(--color-design)' },
  { category: 'Testing', tasks: 173, fill: 'var(--color-testing)' },
  { category: 'DevOps', tasks: 190, fill: 'var(--color-devops)' }
];

const chartConfig = {
  tasks: {
    label: 'Tasks'
  },
  frontend: {
    label: 'Frontend',
    color: 'hsl(var(--chart-1))'
  },
  backend: {
    label: 'Backend',
    color: 'hsl(var(--chart-2))'
  },
  design: {
    label: 'Design',
    color: 'hsl(var(--chart-3))'
  },
  testing: {
    label: 'Testing',
    color: 'hsl(var(--chart-4))'
  },
  devops: {
    label: 'DevOps',
    color: 'hsl(var(--chart-5))'
  }
} satisfies ChartConfig;

export function PieGraph() {
  const totalTasks = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.tasks, 0);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Project 1 Task Distribution</CardTitle>
        <CardDescription>Task breakdown by category</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[360px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="tasks"
              nameKey="category"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalTasks.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Tasks
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Task completion rate up by 8.4% <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing task distribution across teams
        </div>
      </CardFooter>
    </Card>
  );
}
