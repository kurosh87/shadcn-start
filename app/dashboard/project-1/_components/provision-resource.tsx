'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Globe, Server, Cpu } from 'lucide-react';

// Hardware configuration options
const hardwareConfigs = [
  {
    id: 'gpu-a4x',
    name: 'GPU A4X',
    specs: [
      '4x NVIDIA A100-SXM4-80GB',
      '4x AMD EPYC 9004 80GB',
      '1TB RAM',
      '8TB NVMe'
    ],
    price: '$15.00',
    status: 'available',
    type: 'gpu'
  },
  {
    id: 'gpu-a8x',
    name: 'GPU A8X',
    specs: [
      '8x NVIDIA H100 80GB',
      '2x Intel Xeon 6430 64GB',
      '512GB RAM',
      '4TB NVMe'
    ],
    price: '$25.00',
    status: 'not_available',
    type: 'gpu'
  }
];

// Region options
const regions = [
  { id: 'us-west', name: 'US West', datacenters: ['SFO', 'LAX', 'SEA'] },
  { id: 'us-east', name: 'US East', datacenters: ['IAD', 'NYC', 'MIA'] },
  { id: 'eu-west', name: 'EU West', datacenters: ['LON', 'AMS', 'FRA'] }
];

// Software modules
const softwareModules = [
  {
    id: 'cuda',
    name: 'CUDA Toolkit',
    description: 'NVIDIA CUDA Development Tools'
  },
  { id: 'pytorch', name: 'PyTorch', description: 'Deep Learning Framework' },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    description: 'Machine Learning Framework'
  },
  { id: 'docker', name: 'Docker', description: 'Container Runtime' },
  {
    id: 'nvidia-container',
    name: 'NVIDIA Container Toolkit',
    description: 'GPU Container Runtime'
  }
];

export default function ProvisionResourceDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>+ New Resource</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Provision New Resource</DialogTitle>
          <DialogDescription>
            Follow the steps below to provision and add new hardware to your
            project.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-6">
          {/* Project Assignment */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <Server className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Assign to Project</h3>
                <p className="text-sm text-muted-foreground">
                  Select the project for this resource
                </p>
              </div>
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select project" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="llm-inference">LLM_Inference</SelectItem>
                <SelectItem value="3deye">3dEYE</SelectItem>
                <SelectItem value="70b-ftune">70B F-tune</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Region Selection */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <Globe className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Select Region</h3>
                <p className="text-sm text-muted-foreground">
                  Choose the geographical region for deployment
                </p>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((region) => (
                    <SelectItem key={region.id} value={region.id}>
                      {region.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select datacenter" />
                </SelectTrigger>
                <SelectContent>
                  {regions[0].datacenters.map((dc) => (
                    <SelectItem key={dc} value={dc}>
                      {dc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Hardware Configuration */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <Cpu className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Choose Hardware Configuration</h3>
                <p className="text-sm text-muted-foreground">
                  Select the hardware specifications for your resource
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              {hardwareConfigs.map((config) => (
                <Card
                  key={config.id}
                  className={
                    config.status === 'not_available' ? 'opacity-50' : ''
                  }
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Checkbox
                          disabled={config.status === 'not_available'}
                        />
                        <div>
                          <div className="font-semibold">{config.name}</div>
                          <div className="space-y-1 text-sm text-muted-foreground">
                            {config.specs.map((spec, index) => (
                              <div key={index}>{spec}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">{config.price}/hour</div>
                        <Badge
                          variant={
                            config.status === 'available'
                              ? 'default'
                              : 'secondary'
                          }
                          className="mt-2"
                        >
                          {config.status === 'available'
                            ? 'Available'
                            : 'Not Available'}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Software Configuration */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <Server className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Configure Software</h3>
                <p className="text-sm text-muted-foreground">
                  Select additional software to install
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              {softwareModules.map((module) => (
                <div key={module.id} className="flex items-center gap-4">
                  <Checkbox id={module.id} />
                  <div>
                    <label
                      htmlFor={module.id}
                      className="cursor-pointer font-medium"
                    >
                      {module.name}
                    </label>
                    <p className="text-sm text-muted-foreground">
                      {module.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline">Cancel</Button>
            <Button>Create Resource</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Also export as a named export for backward compatibility
export { ProvisionResourceDialog };
