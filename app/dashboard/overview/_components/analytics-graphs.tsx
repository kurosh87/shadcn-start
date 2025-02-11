'use client';

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
  Pie,
  PieChart
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

// Resource usage timeline data
const timelineData = [
  { time: '00:00', gpu: 65, memory: 45 },
  { time: '03:00', gpu: 70, memory: 55 },
  { time: '06:00', gpu: 85, memory: 65 },
  { time: '09:00', gpu: 95, memory: 75 },
  { time: '12:00', gpu: 80, memory: 70 },
  { time: '15:00', gpu: 75, memory: 60 },
  { time: '18:00', gpu: 90, memory: 80 },
  { time: '21:00', gpu: 85, memory: 75 }
];

// Cost analysis data
const costData = [
  { name: 'GPU Resources', value: 4500, fill: '#ff6384' },
  { name: 'Storage', value: 1200, fill: '#36a2eb' },
  { name: 'Network', value: 800, fill: '#ffce56' },
  { name: 'Other', value: 500, fill: '#4bc0c0' }
];

export function ResourceUsageTimeline() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={timelineData}
        margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
        <YAxis
          stroke="hsl(var(--muted-foreground))"
          tickFormatter={(value) => `${value}%`}
        />
        <Tooltip
          formatter={(value: number) => [`${value}%`, '']}
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '6px'
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="gpu"
          name="GPU Utilization"
          stroke="#4bc0c0"
          strokeWidth={2}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="memory"
          name="Memory Usage"
          stroke="#ff6384"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function CostAnalysis() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={costData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
        />
        <Tooltip
          formatter={(value: number) => [`$${value}`, '']}
          contentStyle={{
            backgroundColor: 'hsl(var(--background))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '6px'
          }}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}

// Resource usage data in percentages (%)
const resourceUsageData = [
  { time: '00:00', inference: 35, training: 25, finetuning: 15, memory: 45 },
  { time: '04:00', inference: 42, training: 30, finetuning: 20, memory: 55 },
  { time: '08:00', inference: 65, training: 45, finetuning: 25, memory: 75 },
  { time: '12:00', inference: 85, training: 60, finetuning: 35, memory: 90 },
  { time: '16:00', inference: 75, training: 50, finetuning: 30, memory: 85 },
  { time: '20:00', inference: 45, training: 35, finetuning: 20, memory: 60 }
];

// Cost data in dollars ($)
const costBreakdownData = [
  {
    month: 'Jan',
    inference: 8500,
    training: 12000,
    storage: 3000,
    network: 1500
  },
  {
    month: 'Feb',
    inference: 9200,
    training: 13500,
    storage: 3200,
    network: 1800
  },
  {
    month: 'Mar',
    inference: 11000,
    training: 15000,
    storage: 3400,
    network: 2000
  },
  {
    month: 'Apr',
    inference: 10500,
    training: 14000,
    storage: 3600,
    network: 1900
  },
  {
    month: 'May',
    inference: 12000,
    training: 16500,
    storage: 3800,
    network: 2200
  },
  {
    month: 'Jun',
    inference: 13500,
    training: 18000,
    storage: 4000,
    network: 2500
  }
];

// Performance metrics
const performanceMetrics = [
  { time: '00:00', latency: 85, throughput: 5000, errorRate: 0.8 },
  { time: '04:00', latency: 75, throughput: 4800, errorRate: 0.6 },
  { time: '08:00', latency: 95, throughput: 7500, errorRate: 1.2 },
  { time: '12:00', latency: 110, throughput: 8200, errorRate: 1.5 },
  { time: '16:00', latency: 90, throughput: 7800, errorRate: 1.0 },
  { time: '20:00', latency: 80, throughput: 5500, errorRate: 0.7 }
];

// Hardware allocation data
const hardwareUtilization = [
  { name: 'A100 GPUs', total: 32, used: 28, available: 4 },
  { name: 'V100 GPUs', total: 48, used: 40, available: 8 },
  { name: 'TPU v4', total: 16, used: 12, available: 4 },
  { name: 'CPU Clusters', total: 256, used: 180, available: 76 },
  { name: 'Memory (TB)', total: 512, used: 384, available: 128 }
];

// Add new data for storage and traffic
const storageAnalyticsData = [
  { project: '3dEYE', storage: 1.2, growth: 15 },
  { project: '70B F-tune', storage: 4.5, growth: 28 },
  { project: 'GrubHub Project', storage: 0.8, growth: 5 },
  { project: 'LLM_Inference', storage: 2.1, growth: 12 },
  { project: 'Lightspeed_Demo', storage: 1.5, growth: 8 },
  { project: 'Nebula_Endpoint', storage: 0.9, growth: 7 },
  { project: 'Nebula_Inference', storage: 1.7, growth: 14 },
  { project: 'RadiumDeploy', storage: 2.8, growth: 22 }
];

const trafficTimelineData = [
  { date: '2024-01', inbound: 45, outbound: 38, total: 83 },
  { date: '2024-02', inbound: 52, outbound: 45, total: 97 },
  { date: '2024-03', inbound: 78, outbound: 68, total: 146 },
  { date: '2024-04', inbound: 85, outbound: 72, total: 157 },
  { date: '2024-05', inbound: 92, outbound: 85, total: 177 },
  { date: '2024-06', inbound: 68, outbound: 62, total: 130 }
];

// Sample data for Resource Usage Timeline
const timelineOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
      ticks: {
        callback: function (value: any) {
          return value + '%';
        }
      }
    }
  }
};

// Sample data for Cost Analysis
const costOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const
    }
  }
};

export function PerformanceMetrics() {
  return (
    <Card className="h-full">
      <CardHeader className="space-y-1">
        <CardTitle>Performance Metrics</CardTitle>
        <CardDescription>
          Latency (ms), Throughput (req/s), and Error Rate (%)
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={performanceMetrics}
            margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
            <YAxis
              yAxisId="left"
              stroke="hsl(var(--muted-foreground))"
              label={{
                value: 'Latency (ms) / Throughput (K req/s)',
                angle: -90,
                position: 'insideLeft'
              }}
              tickFormatter={(value) =>
                value >= 1000 ? `${(value / 1000).toFixed(1)}K` : value
              }
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="hsl(var(--muted-foreground))"
              label={{
                value: 'Error Rate (%)',
                angle: 90,
                position: 'insideRight'
              }}
              tickFormatter={(value) => value.toFixed(1)}
            />
            <Tooltip
              formatter={(value: number, name: string) => {
                if (name === 'errorRate')
                  return [`${value.toFixed(2)}%`, 'Error Rate'];
                if (name === 'latency') return [`${value}ms`, 'Latency'];
                return [`${(value / 1000).toFixed(1)}K req/s`, 'Throughput'];
              }}
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px'
              }}
            />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="latency"
              stroke="#7c3aed"
              strokeWidth={2}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="throughput"
              stroke="#2dd4bf"
              strokeWidth={2}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="errorRate"
              stroke="#f59e0b"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export function HardwareUtilization() {
  return (
    <Card className="h-full">
      <CardHeader className="space-y-1">
        <CardTitle>Hardware Utilization</CardTitle>
        <CardDescription>
          Current hardware allocation and availability (units)
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={hardwareUtilization}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
            <YAxis
              type="category"
              dataKey="name"
              stroke="hsl(var(--muted-foreground))"
            />
            <Tooltip
              formatter={(value: number) => [`${value} units`, '']}
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px'
              }}
            />
            <Bar dataKey="used" stackId="a" fill="#7c3aed" />
            <Bar dataKey="available" stackId="a" fill="#2dd4bf" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export function StorageAnalytics() {
  const colors = [
    '#7c3aed',
    '#2dd4bf',
    '#f59e0b',
    '#ec4899',
    '#06b6d4',
    '#10b981',
    '#f43f5e',
    '#8b5cf6'
  ];

  return (
    <Card className="h-full">
      <CardHeader className="space-y-1">
        <CardTitle>Storage Analytics</CardTitle>
        <CardDescription>
          Project storage allocation and growth rate
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart
            data={storageAnalyticsData}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 80, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
            <YAxis
              type="category"
              dataKey="project"
              stroke="hsl(var(--muted-foreground))"
              width={80}
            />
            <Tooltip
              formatter={(value: number, name: string) => {
                if (name === 'storage')
                  return [`${value.toFixed(1)} TB`, 'Storage'];
                return [`${value}%`, 'Growth'];
              }}
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px'
              }}
            />
            <Bar dataKey="storage" barSize={20}>
              {storageAnalyticsData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Bar>
            <Line
              dataKey="growth"
              stroke="#2dd4bf"
              strokeWidth={2}
              dot={{ fill: '#2dd4bf' }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}

export function TrafficAnalytics() {
  return (
    <Card className="h-full">
      <CardHeader className="space-y-1">
        <CardTitle>Network Traffic</CardTitle>
        <CardDescription>
          Monthly inbound and outbound traffic (TB)
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={trafficTimelineData}
            margin={{ top: 20, right: 30, left: 10, bottom: 20 }}
          >
            <defs>
              <linearGradient id="inbound" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="outbound" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2dd4bf" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#2dd4bf" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis
              dataKey="date"
              stroke="hsl(var(--muted-foreground))"
              tickFormatter={(value) => value.split('-')[1]}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              label={{
                value: 'Traffic (TB)',
                angle: -90,
                position: 'insideLeft'
              }}
            />
            <Tooltip
              formatter={(value: number) => [`${value} TB`, '']}
              contentStyle={{
                backgroundColor: 'hsl(var(--background))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '6px'
              }}
            />
            <Area
              type="monotone"
              dataKey="inbound"
              stroke="#7c3aed"
              fill="url(#inbound)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="outbound"
              stroke="#2dd4bf"
              fill="url(#outbound)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
