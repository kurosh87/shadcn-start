'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const recentActivities = [
  {
    name: 'Olivia Martin',
    email: 'olivia.martin@email.com',
    activity: 'Added new feature',
    amount: '+15 points'
  },
  {
    name: 'Jackson Lee',
    email: 'jackson.lee@email.com',
    activity: 'Fixed critical bug',
    amount: '+20 points'
  },
  {
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@email.com',
    activity: 'Updated documentation',
    amount: '+10 points'
  },
  {
    name: 'William Kim',
    email: 'will@email.com',
    activity: 'Code review',
    amount: '+12 points'
  },
  {
    name: 'Sofia Davis',
    email: 'sofia.davis@email.com',
    activity: 'Deployment',
    amount: '+25 points'
  }
];

export function RecentSales() {
  return (
    <div className="space-y-8">
      {recentActivities.map((activity) => (
        <div key={activity.email} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>
              {activity.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.name}</p>
            <p className="text-sm text-muted-foreground">{activity.activity}</p>
          </div>
          <div className="ml-auto font-medium">{activity.amount}</div>
        </div>
      ))}
    </div>
  );
}
