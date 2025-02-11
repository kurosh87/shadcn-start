'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const recentActivities = [
  {
    name: '70B F-tune',
    email: 'Training Job',
    activity: 'Fine-tuning completed',
    points: '85% GPU',
    image: '/avatars/01.png',
    initials: 'FT'
  },
  {
    name: 'LLM_Inference',
    email: 'Inference Job',
    activity: 'Serving requests',
    points: '65% GPU',
    image: '/avatars/02.png',
    initials: 'LI'
  },
  {
    name: '3dEYE',
    email: 'Training Job',
    activity: 'Data preprocessing',
    points: '45% GPU',
    image: '/avatars/03.png',
    initials: '3E'
  },
  {
    name: 'RadiumDeploy',
    email: 'Deployment Job',
    activity: 'Model deployment',
    points: '75% GPU',
    image: '/avatars/04.png',
    initials: 'RD'
  },
  {
    name: 'Nebula_Endpoint',
    email: 'Inference Job',
    activity: 'API endpoint active',
    points: '40% GPU',
    image: '/avatars/05.png',
    initials: 'NE'
  }
];

export function RecentSales() {
  return (
    <div className="space-y-8">
      {recentActivities.map((activity) => (
        <div key={activity.name} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.image} alt={activity.name} />
            <AvatarFallback>{activity.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.name}</p>
            <p className="text-sm text-muted-foreground">{activity.email}</p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-sm font-medium">{activity.activity}</p>
            <p className="text-sm text-muted-foreground">{activity.points}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
