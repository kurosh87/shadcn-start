'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { AreaGraph } from './area-graph';
import { BarGraph } from './bar-graph';
import { PieGraph } from './pie-graph';
import PageContainer from '@/components/layout/page-container';
import { RecentSales } from './recent-sales';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProjectAnalytics } from './analytics';
import { ProjectReports } from './reports';
import { ProjectNotifications } from './notifications';
import { SettingsDialog } from './settings-dialog';
import { TerminalLogs } from './terminal-logs';
import { Input } from '@/components/ui/input';
import {
  Check,
  RefreshCw,
  Server,
  Shield,
  Activity,
  AlertCircle,
  Plus,
  MoreVertical
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer
} from 'recharts';

// Dynamically import the ProvisionResourceDialog to avoid SSR issues
const ProvisionResourceDialog = dynamic(
  () =>
    import('./provision-resource').then((mod) => mod.ProvisionResourceDialog),
  {
    ssr: false,
    loading: () => <Button>Loading...</Button>
  }
);

// Resource data
const resources = [
  {
    name: 'SFO 01',
    status: 'Good',
    statusColor: 'text-green-500',
    bgColor: 'bg-green-500/10',
    primaryIP: '10.3.112.12',
    secondaryIP: '10.3.112.13',
    type: 'GPU Server',
    icon: Server,
    load: 'Normal'
  },
  {
    name: 'SFO 03',
    status: 'Good',
    statusColor: 'text-green-500',
    bgColor: 'bg-green-500/10',
    primaryIP: '10.3.112.14',
    secondaryIP: '10.3.112.15',
    type: 'Inference Server',
    icon: Activity,
    load: 'High'
  },
  {
    name: 'SFO 05',
    status: 'Warning',
    statusColor: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
    primaryIP: '10.3.112.10',
    secondaryIP: '10.3.112.11',
    type: 'Security Server',
    icon: Shield,
    load: 'Medium'
  }
];

// Users data
const users = [
  {
    name: 'Vijay Gadapally',
    email: 'vijay@radium.cloud',
    role: 'Admin',
    permissions: ['PROJECT_ADMIN', 'ADMIN'],
    image: '/avatars/01.png',
    initials: 'VG'
  },
  {
    name: 'Barry Elton',
    email: 'barry@radium.cloud',
    role: 'User',
    permissions: ['ADMIN'],
    image: '/avatars/02.png',
    initials: 'BE'
  },
  {
    name: 'Adam Handin',
    email: 'adam@radium.cloud',
    role: 'Admin',
    permissions: ['PROJECT_ADMIN', 'ADMIN'],
    image: '/avatars/03.png',
    initials: 'AH'
  }
];

// Overview content with all sections
function OverviewContent() {
  return (
    <div className="space-y-8">
      {/* Resources Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="text-lg font-semibold">Resources</h3>
            <p className="text-sm text-muted-foreground">
              Manage your compute and inference resources
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" className="h-8 w-8">
              <RefreshCw className="h-4 w-4" />
            </Button>
            <ProvisionResourceDialog />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Input placeholder="Search resources..." className="max-w-[300px]" />
        </div>

        <Card>
          <CardContent className="p-0">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                    Resource
                  </th>
                  <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                    Status
                  </th>
                  <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                    Load
                  </th>
                  <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                    Primary IP
                  </th>
                  <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                    Secondary IP
                  </th>
                  <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {resources.map((resource) => (
                  <tr
                    key={resource.name}
                    className="border-b border-border hover:bg-muted/50"
                  >
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className={`rounded-lg p-2 ${resource.bgColor}`}>
                          <resource.icon
                            className={`h-4 w-4 ${resource.statusColor}`}
                          />
                        </div>
                        <div>
                          <div className="font-medium">{resource.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {resource.type}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <span
                          className={`flex h-2 w-2 rounded-full ${
                            resource.status === 'Good'
                              ? 'bg-green-500'
                              : 'bg-yellow-500'
                          }`}
                        />
                        <span className={resource.statusColor}>
                          {resource.status}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge
                        variant="secondary"
                        className={
                          resource.load === 'High'
                            ? 'bg-red-500/10 text-red-500'
                            : resource.load === 'Medium'
                            ? 'bg-yellow-500/10 text-yellow-500'
                            : 'bg-green-500/10 text-green-500'
                        }
                      >
                        {resource.load}
                      </Badge>
                    </td>
                    <td className="p-4 font-mono text-sm">
                      {resource.primaryIP}
                    </td>
                    <td className="p-4 font-mono text-sm">
                      {resource.secondaryIP}
                    </td>
                    <td className="p-4">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>

      {/* Users Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Users</h3>
          <Button>+ Add User</Button>
        </div>

        <div className="flex items-center space-x-2">
          <Input placeholder="Search users..." className="max-w-[300px]" />
        </div>

        <Card>
          <CardContent className="p-0">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                    User Information
                  </th>
                  <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                    Permissions
                  </th>
                  <th className="p-4 text-left text-sm font-medium text-muted-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.email}
                    className="border-b border-border hover:bg-muted/50"
                  >
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src={user.image} alt={user.name} />
                          <AvatarFallback>{user.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{user.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        {user.permissions.map((permission) => (
                          <Badge key={permission} variant="secondary">
                            {permission}
                          </Badge>
                        ))}
                      </div>
                    </td>
                    <td className="p-4">
                      <Button variant="ghost" size="sm">
                        ⋮
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function Project1Page() {
  return (
    <PageContainer scrollable>
      <div className="flex-1 space-y-8">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Project 1</h2>
          <div className="hidden items-center space-x-2 md:flex">
            <SettingsDialog />
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="logs">Terminal Logs</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <OverviewContent />
          </TabsContent>
          <TabsContent value="analytics" className="space-y-4">
            <ProjectAnalytics />
          </TabsContent>
          <TabsContent value="reports" className="space-y-4">
            <ProjectReports />
          </TabsContent>
          <TabsContent value="notifications" className="space-y-4">
            <ProjectNotifications />
          </TabsContent>
          <TabsContent value="logs" className="space-y-4">
            <TerminalLogs />
          </TabsContent>
        </Tabs>
      </div>
    </PageContainer>
  );
}
