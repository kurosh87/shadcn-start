'use client';

import { Card } from '@/components/ui/card';

// Sample data for each resource
const hardwareDataMap = {
  'sfo-01': {
    gpu: 57.1,
    memory: 49.3,
    network: 72.8,
    totalMemory: '128GB',
    allocatedMemory: '64GB',
    gpuModel: 'A100'
  },
  'sfo-03': {
    gpu: 77.1,
    memory: 69.3,
    network: 82.8,
    totalMemory: '256GB',
    allocatedMemory: '192GB',
    gpuModel: 'A100'
  },
  'sfo-05': {
    gpu: 47.1,
    memory: 39.3,
    network: 62.8,
    totalMemory: '64GB',
    allocatedMemory: '32GB',
    gpuModel: 'T4'
  }
};

interface HardwareUtilizationProps {
  resourceId: string;
}

export function HardwareUtilization({ resourceId }: HardwareUtilizationProps) {
  const data = hardwareDataMap[resourceId] || hardwareDataMap['sfo-01'];

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-medium">Hardware Utilization</h2>
          <p className="text-sm text-muted-foreground">
            Current resource allocation
          </p>
        </div>
        <div className="grid gap-6">
          <div>
            <div className="mb-2 flex justify-between">
              <div className="text-sm font-medium">GPU - {data.gpuModel}</div>
              <div className="text-sm text-muted-foreground">{data.gpu}%</div>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${data.gpu}%` }}
              />
            </div>
          </div>
          <div>
            <div className="mb-2 flex justify-between">
              <div className="text-sm font-medium">Memory</div>
              <div className="text-sm text-muted-foreground">
                {data.memory}%
              </div>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary/50"
                style={{ width: `${data.memory}%` }}
              />
            </div>
          </div>
          <div>
            <div className="mb-2 flex justify-between">
              <div className="text-sm font-medium">Network I/O</div>
              <div className="text-sm text-muted-foreground">
                {data.network}%
              </div>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary/30"
                style={{ width: `${data.network}%` }}
              />
            </div>
          </div>
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between text-sm">
            <div className="text-muted-foreground">Total Allocated Memory</div>
            <div className="font-medium">
              {data.allocatedMemory} / {data.totalMemory}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
