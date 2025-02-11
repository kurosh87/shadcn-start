'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Bell,
  Plus,
  AlertTriangle,
  AlertCircle,
  Activity,
  Cpu,
  DollarSign,
  HardDrive,
  MoreVertical,
  Check
} from 'lucide-react';

const notificationRules = [
  {
    id: 1,
    name: 'High GPU Usage Alert',
    condition: 'GPU Usage > 90%',
    type: 'Resource',
    recipients: ['Vijay Gadapally', 'Barry Elton'],
    severity: 'High',
    enabled: true
  },
  {
    id: 2,
    name: 'Cost Threshold Warning',
    condition: 'Daily Cost > $1000',
    type: 'Cost',
    recipients: ['Vijay Gadapally', 'Adam Handin'],
    severity: 'Medium',
    enabled: true
  },
  {
    id: 3,
    name: 'Low Storage Space',
    condition: 'Storage < 10%',
    type: 'Storage',
    recipients: ['Barry Elton'],
    severity: 'High',
    enabled: false
  }
];

const notificationHistory = [
  {
    id: 1,
    title: 'High GPU Usage Detected',
    message: 'GPU usage has exceeded 90% threshold',
    type: 'Resource',
    severity: 'High',
    timestamp: '2024-02-09 14:23',
    status: 'Unread'
  },
  {
    id: 2,
    title: 'Daily Cost Alert',
    message: 'Daily cost has exceeded $1000 threshold',
    type: 'Cost',
    severity: 'Medium',
    timestamp: '2024-02-09 10:15',
    status: 'Read'
  },
  {
    id: 3,
    title: 'Performance Degradation',
    message: 'System performance has decreased by 25%',
    type: 'Performance',
    severity: 'High',
    timestamp: '2024-02-08 18:45',
    status: 'Read'
  }
];

const recipients = [
  {
    name: 'Vijay Gadapally',
    email: 'vijay@radium.cloud',
    image: '/avatars/01.png',
    initials: 'VG'
  },
  {
    name: 'Barry Elton',
    email: 'barry@radium.cloud',
    image: '/avatars/02.png',
    initials: 'BE'
  },
  {
    name: 'Adam Handin',
    email: 'adam@radium.cloud',
    image: '/avatars/03.png',
    initials: 'AH'
  }
];

function NotificationRuleCard() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle>Create Notification Rule</CardTitle>
            <CardDescription>
              Set up conditions for automated notifications
            </CardDescription>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Rule
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Rule Name</label>
              <Input placeholder="Enter rule name" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Type</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="resource">Resource Usage</SelectItem>
                  <SelectItem value="cost">Cost</SelectItem>
                  <SelectItem value="performance">Performance</SelectItem>
                  <SelectItem value="storage">Storage</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">Condition</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpu">GPU Usage</SelectItem>
                  <SelectItem value="memory">Memory Usage</SelectItem>
                  <SelectItem value="cost">Daily Cost</SelectItem>
                  <SelectItem value="storage">Storage Space</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Threshold</label>
              <div className="flex gap-2">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Operator" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="greater">&gt;</SelectItem>
                    <SelectItem value="less">&lt;</SelectItem>
                    <SelectItem value="equal">=</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Value" className="flex-1" />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Recipients</label>
            <div className="flex flex-wrap gap-2">
              {recipients.map((recipient) => (
                <div
                  key={recipient.email}
                  className="flex items-center gap-2 rounded-lg border p-2"
                >
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={recipient.image} />
                    <AvatarFallback>{recipient.initials}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">{recipient.name}</span>
                  <Button variant="ghost" size="icon" className="h-4 w-4">
                    <Check className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function NotificationRulesTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Rules</CardTitle>
        <CardDescription>
          Manage your notification rules and conditions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Rule Name</TableHead>
              <TableHead>Condition</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Recipients</TableHead>
              <TableHead>Severity</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {notificationRules.map((rule) => (
              <TableRow key={rule.id}>
                <TableCell className="font-medium">{rule.name}</TableCell>
                <TableCell>{rule.condition}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{rule.type}</Badge>
                </TableCell>
                <TableCell>
                  <div className="flex -space-x-2">
                    {rule.recipients.map((recipient, index) => (
                      <Avatar
                        key={index}
                        className="h-6 w-6 border-2 border-background"
                      >
                        <AvatarFallback>
                          {recipient
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={
                      rule.severity === 'High'
                        ? 'bg-red-500/10 text-red-500'
                        : 'bg-yellow-500/10 text-yellow-500'
                    }
                  >
                    {rule.severity}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Switch checked={rule.enabled} />
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function NotificationHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification History</CardTitle>
        <CardDescription>Recent notifications and alerts</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Severity</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {notificationHistory.map((notification) => (
              <TableRow key={notification.id}>
                <TableCell className="font-medium">
                  {notification.title}
                </TableCell>
                <TableCell>{notification.message}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{notification.type}</Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={
                      notification.severity === 'High'
                        ? 'bg-red-500/10 text-red-500'
                        : 'bg-yellow-500/10 text-yellow-500'
                    }
                  >
                    {notification.severity}
                  </Badge>
                </TableCell>
                <TableCell>{notification.timestamp}</TableCell>
                <TableCell>
                  <Badge
                    variant="secondary"
                    className={
                      notification.status === 'Unread'
                        ? 'bg-blue-500/10 text-blue-500'
                        : 'bg-green-500/10 text-green-500'
                    }
                  >
                    {notification.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export function ProjectNotifications() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Notifications</h2>
          <p className="text-muted-foreground">
            Manage notification rules and view history
          </p>
        </div>
      </div>

      <NotificationRuleCard />
      <NotificationRulesTable />
      <NotificationHistory />
    </div>
  );
}
