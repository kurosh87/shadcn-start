'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import {
  Terminal,
  AlertCircle,
  Download,
  Search,
  XCircle,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

const logs = [
  {
    timestamp: '2024-02-09 14:23:45',
    type: 'command',
    content: '$ radium init project-1',
    level: 'info'
  },
  {
    timestamp: '2024-02-09 14:23:46',
    type: 'output',
    content: 'Initializing project configuration...',
    level: 'info'
  },
  {
    timestamp: '2024-02-09 14:23:47',
    type: 'output',
    content: 'Creating project directory structure',
    level: 'info'
  },
  {
    timestamp: '2024-02-09 14:23:48',
    type: 'success',
    content: 'Project initialized successfully',
    level: 'success'
  },
  {
    timestamp: '2024-02-09 14:24:01',
    type: 'command',
    content: '$ radium deploy --env production',
    level: 'info'
  },
  {
    timestamp: '2024-02-09 14:24:02',
    type: 'output',
    content: 'Starting deployment process...',
    level: 'info'
  },
  {
    timestamp: '2024-02-09 14:24:03',
    type: 'warning',
    content: 'High memory usage detected on primary node',
    level: 'warning'
  },
  {
    timestamp: '2024-02-09 14:24:04',
    type: 'output',
    content: 'Allocating additional resources',
    level: 'info'
  },
  {
    timestamp: '2024-02-09 14:24:05',
    type: 'error',
    content: 'Failed to connect to secondary node: Connection timeout',
    level: 'error'
  },
  {
    timestamp: '2024-02-09 14:24:06',
    type: 'output',
    content: 'Retrying connection...',
    level: 'info'
  },
  {
    timestamp: '2024-02-09 14:24:07',
    type: 'success',
    content: 'Connection established',
    level: 'success'
  },
  {
    timestamp: '2024-02-09 14:24:10',
    type: 'command',
    content: '$ radium status',
    level: 'info'
  },
  {
    timestamp: '2024-02-09 14:24:11',
    type: 'output',
    content: `Project Status: Active
Deployment: production
Resources: 3/3 online
Memory Usage: 72.8%
Storage: 49.3%
Network: Stable`,
    level: 'info'
  },
  // Add more logs to demonstrate scrolling
  ...Array.from({ length: 20 }, (_, i) => ({
    timestamp: `2024-02-09 14:24:${20 + i}`,
    type: 'output',
    content: `Processing batch ${i + 1}/20: Optimizing resource allocation...`,
    level: 'info'
  }))
];

export function TerminalLogs() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Terminal Logs</h2>
          <p className="text-muted-foreground">
            Command history and system logs
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex w-full max-w-sm items-center gap-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search logs..." className="flex-1" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Log level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="error">Error</SelectItem>
              <SelectItem value="warning">Warning</SelectItem>
              <SelectItem value="info">Info</SelectItem>
              <SelectItem value="success">Success</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      <Card className="relative">
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4" />
            <span className="font-medium">Terminal Output</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <XCircle className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div
          className="h-[600px] overflow-auto p-4 font-mono text-sm"
          style={{
            backgroundColor: 'hsl(var(--background))',
            backgroundImage:
              'linear-gradient(to bottom, hsl(var(--background)), hsl(var(--background)))'
          }}
        >
          {logs.map((log, index) => (
            <div key={index} className="mb-2 flex items-start gap-2">
              <span className="whitespace-nowrap text-muted-foreground">
                {log.timestamp}
              </span>
              {log.type === 'command' && (
                <span className="text-blue-500">→</span>
              )}
              {log.type === 'error' && (
                <AlertCircle className="mt-1 h-4 w-4 text-red-500" />
              )}
              {log.type === 'warning' && (
                <AlertTriangle className="mt-1 h-4 w-4 text-yellow-500" />
              )}
              {log.type === 'success' && (
                <CheckCircle className="mt-1 h-4 w-4 text-green-500" />
              )}
              <span
                className={
                  log.level === 'error'
                    ? 'text-red-500'
                    : log.level === 'warning'
                    ? 'text-yellow-500'
                    : log.level === 'success'
                    ? 'text-green-500'
                    : ''
                }
              >
                <pre className="inline whitespace-pre-wrap">{log.content}</pre>
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
