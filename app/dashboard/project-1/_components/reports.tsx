'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Download, FileText, BarChart3, Clock, DollarSign } from 'lucide-react';

const performanceReports = [
  {
    name: 'Daily Performance Summary',
    date: '2024-02-09',
    type: 'Performance',
    size: '2.4 MB',
    status: 'Ready'
  },
  {
    name: 'Weekly Latency Analysis',
    date: '2024-02-08',
    type: 'Performance',
    size: '4.1 MB',
    status: 'Ready'
  },
  {
    name: 'Monthly Performance Trends',
    date: '2024-02-01',
    type: 'Performance',
    size: '8.7 MB',
    status: 'Processing'
  }
];

const usageReports = [
  {
    name: 'Resource Utilization Report',
    date: '2024-02-09',
    type: 'Usage',
    size: '3.2 MB',
    status: 'Ready'
  },
  {
    name: 'GPU Usage Breakdown',
    date: '2024-02-08',
    type: 'Usage',
    size: '2.8 MB',
    status: 'Ready'
  },
  {
    name: 'Storage Allocation Summary',
    date: '2024-02-07',
    type: 'Usage',
    size: '1.9 MB',
    status: 'Ready'
  }
];

const costReports = [
  {
    name: 'Monthly Cost Analysis',
    date: '2024-02-09',
    type: 'Cost',
    size: '1.8 MB',
    status: 'Ready'
  },
  {
    name: 'Resource Cost Breakdown',
    date: '2024-02-08',
    type: 'Cost',
    size: '2.2 MB',
    status: 'Ready'
  },
  {
    name: 'Cost Optimization Suggestions',
    date: '2024-02-07',
    type: 'Cost',
    size: '1.5 MB',
    status: 'Processing'
  }
];

function ReportTable({ reports }: { reports: any[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Report Name</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Size</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reports.map((report) => (
          <TableRow key={report.name}>
            <TableCell className="font-medium">{report.name}</TableCell>
            <TableCell>{report.date}</TableCell>
            <TableCell>{report.type}</TableCell>
            <TableCell>{report.size}</TableCell>
            <TableCell>
              <div
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  report.status === 'Ready'
                    ? 'bg-green-500/10 text-green-500'
                    : 'bg-yellow-500/10 text-yellow-500'
                }`}
              >
                {report.status}
              </div>
            </TableCell>
            <TableCell className="text-right">
              <Button
                variant="ghost"
                size="icon"
                disabled={report.status !== 'Ready'}
              >
                <Download className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export function ProjectReports() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Reports</h2>
          <p className="text-muted-foreground">
            View and download project reports and analytics
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Select defaultValue="last7days">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last7days">Last 7 days</SelectItem>
              <SelectItem value="last30days">Last 30 days</SelectItem>
              <SelectItem value="last3months">Last 3 months</SelectItem>
              <SelectItem value="custom">Custom range</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <FileText className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Performance Reports
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Last updated 2 hours ago
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Usage Reports</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Last updated 1 hour ago
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cost Reports</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Last updated 30 minutes ago
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance Reports</CardTitle>
            <CardDescription>
              View detailed performance analysis and metrics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ReportTable reports={performanceReports} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Usage Reports</CardTitle>
            <CardDescription>
              Resource utilization and allocation reports
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ReportTable reports={usageReports} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cost Reports</CardTitle>
            <CardDescription>
              Cost analysis and optimization reports
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ReportTable reports={costReports} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
