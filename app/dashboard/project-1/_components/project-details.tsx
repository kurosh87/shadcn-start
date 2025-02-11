'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { Save, Edit2, Clock, Server, Shield } from 'lucide-react';

interface ProjectSettings {
  name: string;
  description: string;
  environment: string;
  resourceType: string;
  autoScaling: boolean;
  maxInstances: string;
  gpuType: string;
  memorySize: string;
  storageSize: string;
  networkTier: string;
  tags: string[];
}

const initialSettings: ProjectSettings = {
  name: 'Project 1',
  description:
    'High-performance machine learning inference project for real-time processing',
  environment: 'production',
  resourceType: 'gpu',
  autoScaling: true,
  maxInstances: '5',
  gpuType: 'a100',
  memorySize: '128',
  storageSize: '1000',
  networkTier: 'premium',
  tags: ['ML', 'GPU', 'Production']
};

export function ProjectDetails() {
  const [settings, setSettings] = useState<ProjectSettings>(initialSettings);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    // Here you would typically make an API call to save the settings
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Project Details</h2>
          <p className="text-muted-foreground">
            Configure project settings and resource allocation
          </p>
        </div>
        <Button
          variant={isEditing ? 'default' : 'outline'}
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
        >
          {isEditing ? (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </>
          ) : (
            <>
              <Edit2 className="mr-2 h-4 w-4" />
              Edit Details
            </>
          )}
        </Button>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
            <CardDescription>
              General project settings and configuration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Project Name</Label>
                <Input
                  id="name"
                  value={settings.name}
                  onChange={(e) =>
                    setSettings({ ...settings, name: e.target.value })
                  }
                  disabled={!isEditing}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={settings.description}
                  onChange={(e) =>
                    setSettings({ ...settings, description: e.target.value })
                  }
                  disabled={!isEditing}
                />
              </div>
              <div className="grid gap-2">
                <Label>Environment</Label>
                <Select
                  value={settings.environment}
                  onValueChange={(value) =>
                    setSettings({ ...settings, environment: value })
                  }
                  disabled={!isEditing}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="development">Development</SelectItem>
                    <SelectItem value="staging">Staging</SelectItem>
                    <SelectItem value="production">Production</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Tags</Label>
                <div className="flex flex-wrap gap-2">
                  {settings.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                  {isEditing && (
                    <Button variant="outline" size="sm">
                      + Add Tag
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resource Configuration</CardTitle>
            <CardDescription>
              Hardware and infrastructure settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label>Resource Type</Label>
                <Select
                  value={settings.resourceType}
                  onValueChange={(value) =>
                    setSettings({ ...settings, resourceType: value })
                  }
                  disabled={!isEditing}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpu">GPU Optimized</SelectItem>
                    <SelectItem value="cpu">CPU Optimized</SelectItem>
                    <SelectItem value="memory">Memory Optimized</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>GPU Type</Label>
                <Select
                  value={settings.gpuType}
                  onValueChange={(value) =>
                    setSettings({ ...settings, gpuType: value })
                  }
                  disabled={!isEditing}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a100">NVIDIA A100</SelectItem>
                    <SelectItem value="v100">NVIDIA V100</SelectItem>
                    <SelectItem value="t4">NVIDIA T4</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Memory Size (GB)</Label>
                <Select
                  value={settings.memorySize}
                  onValueChange={(value) =>
                    setSettings({ ...settings, memorySize: value })
                  }
                  disabled={!isEditing}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="64">64 GB</SelectItem>
                    <SelectItem value="128">128 GB</SelectItem>
                    <SelectItem value="256">256 GB</SelectItem>
                    <SelectItem value="512">512 GB</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label>Storage Size (GB)</Label>
                <Select
                  value={settings.storageSize}
                  onValueChange={(value) =>
                    setSettings({ ...settings, storageSize: value })
                  }
                  disabled={!isEditing}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="500">500 GB</SelectItem>
                    <SelectItem value="1000">1 TB</SelectItem>
                    <SelectItem value="2000">2 TB</SelectItem>
                    <SelectItem value="5000">5 TB</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto Scaling</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically adjust resources based on demand
                  </p>
                </div>
                <Switch
                  checked={settings.autoScaling}
                  onCheckedChange={(checked) =>
                    setSettings({ ...settings, autoScaling: checked })
                  }
                  disabled={!isEditing}
                />
              </div>
              {settings.autoScaling && (
                <div className="grid gap-2">
                  <Label>Maximum Instances</Label>
                  <Select
                    value={settings.maxInstances}
                    onValueChange={(value) =>
                      setSettings({ ...settings, maxInstances: value })
                    }
                    disabled={!isEditing}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="3">3 instances</SelectItem>
                      <SelectItem value="5">5 instances</SelectItem>
                      <SelectItem value="10">10 instances</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Network Configuration</CardTitle>
            <CardDescription>Network and security settings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label>Network Tier</Label>
                <Select
                  value={settings.networkTier}
                  onValueChange={(value) =>
                    setSettings({ ...settings, networkTier: value })
                  }
                  disabled={!isEditing}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                    <SelectItem value="ultra">Ultra</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
