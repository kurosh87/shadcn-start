'use client';

import { useState } from 'react';
import { ResourceUsageTimeline } from './analytics/resource-usage';
import { CostAnalysis } from './analytics/cost-analysis';
import { PerformanceMetrics } from './analytics/performance';
import { HardwareUtilization } from './analytics/hardware';
import { StorageAnalytics } from './analytics/storage';
import { TrafficAnalytics } from './analytics/traffic';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

const resources = [
  { id: 'sfo-01', name: 'SFO 01', type: 'GPU Server' },
  { id: 'sfo-03', name: 'SFO 03', type: 'Inference Server' },
  { id: 'sfo-05', name: 'SFO 05', type: 'Security Server' }
];

export function ProjectAnalytics() {
  const [selectedResource, setSelectedResource] = useState(resources[0].id);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Analytics</h2>
          <p className="text-muted-foreground">
            Resource usage and performance metrics
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Select value={selectedResource} onValueChange={setSelectedResource}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select resource" />
            </SelectTrigger>
            <SelectContent>
              {resources.map((resource) => (
                <SelectItem key={resource.id} value={resource.id}>
                  {resource.name} - {resource.type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ResourceUsageTimeline resourceId={selectedResource} />
        <HardwareUtilization resourceId={selectedResource} />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <CostAnalysis resourceId={selectedResource} />
        <PerformanceMetrics resourceId={selectedResource} />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <StorageAnalytics resourceId={selectedResource} />
        <TrafficAnalytics resourceId={selectedResource} />
      </div>
    </div>
  );
}
