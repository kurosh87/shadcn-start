'use client';

import * as React from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
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
  { name: '3dEYE', gpu: 55, memory: 48, compute: 52 },
  { name: '70B F-tune', gpu: 65, memory: 55, compute: 58 },
  { name: 'GrubHub Project', gpu: 52, memory: 45, compute: 48 },
  { name: 'Lightspeed_Demo', gpu: 58, memory: 50, compute: 54 },
  { name: 'LLM_Inference', gpu: 60, memory: 52, compute: 56 },
  { name: 'Nebula_Endpoint', gpu: 54, memory: 47, compute: 50 },
  { name: 'RadiumDeploy', gpu: 56, memory: 49, compute: 52 }
];

const chartConfig: ChartConfig = {
  gpu: {
    label: 'Computation',
    color: 'hsl(var(--chart-1))',
    theme: {
      backgroundColor: 'hsl(var(--chart-1))',
      borderColor: 'hsl(var(--chart-1))'
    }
  },
  memory: {
    label: 'Storage',
    color: 'hsl(var(--chart-2))',
    theme: {
      backgroundColor: 'hsl(var(--chart-2))',
      borderColor: 'hsl(var(--chart-2))'
    }
  },
  compute: {
    label: 'Traffic',
    color: 'hsl(var(--chart-3))',
    theme: {
      backgroundColor: 'hsl(var(--chart-3))',
      borderColor: 'hsl(var(--chart-3))'
    }
  }
};

const miniChartData = {
  cpu: [
    { name: 'GPU', dailyAvg: 0, current: 0 },
    { name: 'CPU', dailyAvg: 7, current: 7 },
    { name: 'MEMORY', dailyAvg: 57.85, current: 57.85 }
  ],
  gpu: [
    { name: 'GPU', dailyAvg: 0, current: 0 },
    { name: 'CPU', dailyAvg: 7, current: 7 },
    { name: 'MEMORY', dailyAvg: 57.85, current: 57.85 }
  ],
  memory: [
    { name: 'GPU', dailyAvg: 0, current: 0 },
    { name: 'CPU', dailyAvg: 7, current: 7 },
    { name: 'MEMORY', dailyAvg: 57.85, current: 57.85 }
  ]
};

const miniBarData = {
  cpu: [
    { name: 'Daily', value: 7, fill: 'rgb(34, 211, 238)' },
    { name: 'Current', value: 7.2, fill: 'rgb(34, 197, 94)' }
  ],
  gpu: [
    { name: 'Daily', value: 85, fill: 'rgb(34, 211, 238)' },
    { name: 'Current', value: 82, fill: 'rgb(34, 197, 94)' }
  ],
  memory: [
    { name: 'Daily', value: 57.85, fill: 'rgb(34, 211, 238)' },
    { name: 'Current', value: 58.2, fill: 'rgb(34, 197, 94)' }
  ]
};

const storageData = [
  { name: '3dEYE', value: 450, color: '#60A5FA' },
  { name: '70B F-tune', value: 850, color: '#8B5CF6' },
  { name: 'GrubHub Project', value: 120, color: '#34D399' },
  { name: 'LLM_Inference', value: 380, color: '#F472B6' },
  { name: 'Lightspeed_Demonstration', value: 180, color: '#FBBF24' },
  { name: 'Nebula_Endpoint', value: 220, color: '#6366F1' },
  { name: 'Nebula_Inference', value: 90, color: '#EC4899' },
  { name: 'RadiumDeploy', value: 60, color: '#10B981' }
];

const storageTrendData = [
  { name: 'Jan', usage: 1.8 },
  { name: 'Feb', usage: 1.9 },
  { name: 'Mar', usage: 2.0 },
  { name: 'Apr', usage: 2.1 },
  { name: 'May', usage: 2.2 },
  { name: 'Jun', usage: 2.29 }
];

const trafficTrendData = [
  {
    name: 'Jan',
    '3dEYE': 1.4,
    '70B F-tune': 2.5,
    'GrubHub Project': 0.7,
    LLM_Inference: 1.9,
    Lightspeed_Demonstration: 0.9,
    Nebula_Endpoint: 1.2,
    Nebula_Inference: 0.6,
    RadiumDeploy: 0.4
  },
  {
    name: 'Feb',
    '3dEYE': 1.6,
    '70B F-tune': 2.8,
    'GrubHub Project': 1.2,
    LLM_Inference: 1.7,
    Lightspeed_Demonstration: 1.3,
    Nebula_Endpoint: 1.4,
    Nebula_Inference: 0.8,
    RadiumDeploy: 0.5
  },
  {
    name: 'Mar',
    '3dEYE': 1.5,
    '70B F-tune': 3.4,
    'GrubHub Project': 1.0,
    LLM_Inference: 2.2,
    Lightspeed_Demonstration: 1.1,
    Nebula_Endpoint: 1.6,
    Nebula_Inference: 0.9,
    RadiumDeploy: 0.7
  },
  {
    name: 'Apr',
    '3dEYE': 1.8,
    '70B F-tune': 3.2,
    'GrubHub Project': 1.4,
    LLM_Inference: 2.4,
    Lightspeed_Demonstration: 1.5,
    Nebula_Endpoint: 1.9,
    Nebula_Inference: 1.1,
    RadiumDeploy: 0.8
  },
  {
    name: 'May',
    '3dEYE': 1.7,
    '70B F-tune': 3.7,
    'GrubHub Project': 1.3,
    LLM_Inference: 2.6,
    Lightspeed_Demonstration: 1.4,
    Nebula_Endpoint: 1.7,
    Nebula_Inference: 1.2,
    RadiumDeploy: 0.9
  },
  {
    name: 'Jun',
    '3dEYE': 2.1,
    '70B F-tune': 3.9,
    'GrubHub Project': 1.6,
    LLM_Inference: 2.8,
    Lightspeed_Demonstration: 1.7,
    Nebula_Endpoint: 2.0,
    Nebula_Inference: 1.3,
    RadiumDeploy: 1.1
  }
];

export function BarGraph() {
  const [activeMetric, setActiveMetric] =
    React.useState<keyof typeof chartConfig>('gpu');

  const total = React.useMemo(
    () => ({
      gpu: '45.2',
      memory: '2.35',
      compute: '12.2'
    }),
    []
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Global Project Resource Usage</CardTitle>
          <CardDescription>
            Combined GPU, Memory, and Global Compute utilization
          </CardDescription>
        </div>
        <div className="flex">
          {['gpu', 'memory', 'compute'].map((key) => {
            const metric = key as keyof typeof chartConfig;
            return (
              <button
                key={metric}
                data-active={activeMetric === metric}
                className="relative flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveMetric(metric)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[metric].label}
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-bold leading-none sm:text-3xl">
                    {total[metric]}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    {metric === 'gpu' ? 'vCPUs' : 'TB'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[280px] w-full"
        >
          {activeMetric === 'gpu' ? (
            <div className="grid h-full grid-cols-3 gap-6 p-6">
              <div className="flex h-full flex-col justify-between rounded-lg border border-border bg-muted/50 p-6">
                <div className="space-y-2">
                  <span className="text-lg font-medium">CPU</span>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold">7%</span>
                    <span className="text-sm text-muted-foreground">
                      utilization
                    </span>
                  </div>
                </div>
                <div className="mt-2 h-[60px] w-full">
                  <BarChart
                    width={200}
                    height={60}
                    data={miniBarData.cpu}
                    margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
                    barGap={2}
                  >
                    <YAxis
                      domain={[0, 100]}
                      ticks={[0, 50, 100]}
                      tick={{ fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Bar
                      dataKey="value"
                      fill={(entry) => entry.fill}
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </div>
                <div className="mt-2 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[rgb(34,211,238)]" />
                    <span>Daily average</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[rgb(34,197,94)]" />
                    <span>Current Usage</span>
                  </div>
                </div>
              </div>
              <div className="flex h-full flex-col justify-between rounded-lg border border-border bg-muted/50 p-6">
                <div className="space-y-2">
                  <span className="text-lg font-medium">GPU</span>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold">82%</span>
                    <span className="text-sm text-muted-foreground">
                      utilization
                    </span>
                  </div>
                </div>
                <div className="mt-2 h-[60px] w-full">
                  <BarChart
                    width={200}
                    height={60}
                    data={miniBarData.gpu}
                    margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
                    barGap={2}
                  >
                    <YAxis
                      domain={[0, 100]}
                      ticks={[0, 50, 100]}
                      tick={{ fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Bar
                      dataKey="value"
                      fill={(entry) => entry.fill}
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </div>
                <div className="mt-2 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[rgb(34,211,238)]" />
                    <span>Daily average</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[rgb(34,197,94)]" />
                    <span>Current Usage</span>
                  </div>
                </div>
              </div>
              <div className="flex h-full flex-col justify-between rounded-lg border border-border bg-muted/50 p-6">
                <div className="space-y-2">
                  <span className="text-lg font-medium">Memory</span>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold">58.2%</span>
                    <span className="text-sm text-muted-foreground">
                      utilization
                    </span>
                  </div>
                </div>
                <div className="mt-2 h-[60px] w-full">
                  <BarChart
                    width={200}
                    height={60}
                    data={miniBarData.memory}
                    margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
                    barGap={2}
                  >
                    <YAxis
                      domain={[0, 100]}
                      ticks={[0, 50, 100]}
                      tick={{ fontSize: 10 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Bar
                      dataKey="value"
                      fill={(entry) => entry.fill}
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </div>
                <div className="mt-2 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[rgb(34,211,238)]" />
                    <span>Daily average</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[rgb(34,197,94)]" />
                    <span>Current Usage</span>
                  </div>
                </div>
              </div>
            </div>
          ) : activeMetric === 'memory' ? (
            <div className="grid h-full grid-cols-3 gap-3 p-3">
              <div className="flex h-full flex-col justify-between rounded-lg border border-border bg-muted/50 p-4">
                <div className="space-y-1">
                  <span className="text-lg font-medium">
                    Storage Distribution
                  </span>
                  <p className="text-xs text-muted-foreground">
                    Total storage allocation by project
                  </p>
                </div>
                <div className="relative flex flex-1 items-center justify-center">
                  <PieChart width={180} height={180}>
                    <Pie
                      data={storageData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      innerRadius={45}
                      outerRadius={70}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {storageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-bold">2.29</div>
                      <div className="text-xs text-muted-foreground">
                        TB Total
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex h-full flex-col justify-between rounded-lg border border-border bg-muted/50 p-4">
                <div className="space-y-1">
                  <span className="text-lg font-medium">Project Breakdown</span>
                  <p className="text-xs text-muted-foreground">
                    Storage usage by project
                  </p>
                </div>
                <div className="flex-1 overflow-auto">
                  <div className="flex flex-col gap-1 text-xs">
                    {storageData.map((entry, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: entry.color }}
                        />
                        <span className="flex-1 truncate">{entry.name}</span>
                        <span className="font-medium tabular-nums">
                          {entry.value} GB
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex h-full flex-col justify-between rounded-lg border border-border bg-muted/50 p-4">
                <div className="space-y-1">
                  <span className="text-lg font-medium">Growth Trend</span>
                  <p className="text-xs text-muted-foreground">
                    Last 6 months usage in TB
                  </p>
                </div>
                <div className="flex-1">
                  <AreaChart
                    width={200}
                    height={180}
                    data={storageTrendData}
                    margin={{ top: 5, right: 5, left: 5, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="storageGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#8B5CF6"
                          stopOpacity={0.4}
                        />
                        <stop
                          offset="95%"
                          stopColor="#8B5CF6"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 10 }}
                      dy={5}
                    />
                    <Area
                      type="monotone"
                      dataKey="usage"
                      stroke="#8B5CF6"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#storageGradient)"
                      dot={{ fill: '#8B5CF6', r: 3 }}
                      activeDot={{ r: 5, strokeWidth: 0 }}
                    />
                  </AreaChart>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full w-full">
              <div className="flex h-full flex-col rounded-lg border border-border bg-muted/50">
                <div className="space-y-0.5 border-b p-3">
                  <span className="text-base font-medium">
                    Global Traffic Distribution
                  </span>
                  <p className="text-xs text-muted-foreground">
                    Traffic usage by project over time (TB)
                  </p>
                </div>
                <div className="min-h-[180px] w-full flex-1 p-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={trafficTrendData}
                      margin={{ top: 5, right: 5, left: -15, bottom: 0 }}
                      stackOffset="none"
                    >
                      <defs>
                        {storageData.map((entry, index) => (
                          <linearGradient
                            key={`gradient-${index}`}
                            id={`gradient-${entry.name}`}
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop
                              offset="5%"
                              stopColor={entry.color}
                              stopOpacity={0.8}
                            />
                            <stop
                              offset="95%"
                              stopColor={entry.color}
                              stopOpacity={0.1}
                            />
                          </linearGradient>
                        ))}
                      </defs>
                      <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10 }}
                        dy={2}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'hsl(var(--background))',
                          borderColor: 'hsl(var(--border))',
                          borderRadius: '6px',
                          padding: '6px'
                        }}
                        itemStyle={{
                          color: 'hsl(var(--foreground))',
                          fontSize: '11px'
                        }}
                        labelStyle={{
                          color: 'hsl(var(--foreground))',
                          fontSize: '11px'
                        }}
                      />
                      {storageData.map((entry, index) => (
                        <Area
                          key={entry.name}
                          type="monotone"
                          dataKey={entry.name}
                          stackId="1"
                          stroke={entry.color}
                          fill={`url(#gradient-${entry.name})`}
                          strokeWidth={1.5}
                        />
                      ))}
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="border-t p-2">
                  <div className="flex flex-wrap gap-1.5 text-[10px] text-muted-foreground">
                    {storageData.map((entry) => (
                      <div key={entry.name} className="flex items-center gap-1">
                        <div
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ backgroundColor: entry.color }}
                        />
                        <span>{entry.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
