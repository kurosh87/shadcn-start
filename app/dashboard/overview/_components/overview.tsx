'use client';

import { AreaGraph } from './area-graph';
import { BarGraph } from './bar-graph';
import { ProjectsTable } from './projects-table';
import {
  ResourceUsageTimeline,
  CostAnalysis,
  PerformanceMetrics,
  HardwareUtilization,
  StorageAnalytics,
  TrafficAnalytics
} from './analytics-graphs';
import { CalendarDateRangePicker } from '@/components/date-range-picker';
import PageContainer from '@/components/layout/page-container';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Overview content with all sections
function OverviewContent() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-background/50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Global Compute
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-2xl font-bold">45.2 vCPUs</p>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                +20.1% from last month
              </p>
            </div>
            <div className="text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M6 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                <path d="M18 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                <path d="M6 14h12" />
                <path d="M15 11l-3-3-3 3" />
              </svg>
            </div>
          </div>
        </Card>
        <Card className="bg-background/50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Global Storage
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-2xl font-bold">2.35 TB</p>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                +180.1% from last month
              </p>
            </div>
            <div className="text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>
          </div>
        </Card>
        <Card className="bg-background/50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Global Traffic
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-2xl font-bold">12.2 TB</p>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                +19% from last month
              </p>
            </div>
            <div className="text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
          </div>
        </Card>
        <Card className="bg-background/50 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Current Usage
              </p>
              <div className="flex items-baseline gap-2">
                <p className="text-2xl font-bold">57.3%</p>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                +20% since last hour
              </p>
            </div>
            <div className="text-muted-foreground">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
          </div>
        </Card>
      </div>
      <div className="w-full">
        <div className="w-full">
          <BarGraph />
        </div>
        <div style={{ display: 'none' }}>
          <AreaGraph />
        </div>
      </div>
      <div className="mt-8">
        <ProjectsTable />
      </div>
    </div>
  );
}

// Analytics content with consolidated telemetry visualizations
function AnalyticsContent() {
  return (
    <div className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="col-span-1">
          <ResourceUsageTimeline />
        </div>
        <div className="col-span-1">
          <CostAnalysis />
        </div>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="col-span-1">
          <PerformanceMetrics />
        </div>
        <div className="col-span-1">
          <HardwareUtilization />
        </div>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="col-span-1">
          <StorageAnalytics />
        </div>
        <div className="col-span-1">
          <TrafficAnalytics />
        </div>
      </div>
    </div>
  );
}

export default function OverViewPage() {
  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            AI Hardware Monitor 🚀
          </h2>
          <div className="hidden items-center space-x-2 md:flex">
            <CalendarDateRangePicker />
            <Button>Download Report</Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <OverviewContent />
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <AnalyticsContent />
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  );
}
