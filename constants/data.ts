import { NavItem } from '@/types';
import { Icons } from '@/components/icons';

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};
export const users: User[] = [
  {
    id: 1,
    name: 'Candice Schiner',
    company: 'Dell',
    role: 'Frontend Developer',
    verified: false,
    status: 'Active'
  },
  {
    id: 2,
    name: 'John Doe',
    company: 'TechCorp',
    role: 'Backend Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    company: 'WebTech',
    role: 'UI Designer',
    verified: true,
    status: 'Active'
  },
  {
    id: 4,
    name: 'David Smith',
    company: 'Innovate Inc.',
    role: 'Fullstack Developer',
    verified: false,
    status: 'Inactive'
  },
  {
    id: 5,
    name: 'Emma Wilson',
    company: 'TechGuru',
    role: 'Product Manager',
    verified: true,
    status: 'Active'
  },
  {
    id: 6,
    name: 'James Brown',
    company: 'CodeGenius',
    role: 'QA Engineer',
    verified: false,
    status: 'Active'
  },
  {
    id: 7,
    name: 'Laura White',
    company: 'SoftWorks',
    role: 'UX Designer',
    verified: true,
    status: 'Active'
  },
  {
    id: 8,
    name: 'Michael Lee',
    company: 'DevCraft',
    role: 'DevOps Engineer',
    verified: false,
    status: 'Active'
  },
  {
    id: 9,
    name: 'Olivia Green',
    company: 'WebSolutions',
    role: 'Frontend Developer',
    verified: true,
    status: 'Active'
  },
  {
    id: 10,
    name: 'Robert Taylor',
    company: 'DataTech',
    role: 'Data Analyst',
    verified: false,
    status: 'Active'
  }
];

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export type Product = {
  photo_url: string;
  name: string;
  description: string;
  created_at: string;
  price: number;
  id: number;
  category: string;
  updated_at: string;
};

export const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    url: '/dashboard/overview',
    icon: 'dashboard',
    isActive: false
  },
  {
    title: 'Explore',
    url: '#',
    icon: 'compass',
    isActive: true,
    items: [
      {
        title: 'All Destinations',
        url: '/dashboard/explore',
        icon: 'compass',
        isActive: false
      },
      {
        title: 'Africa',
        url: '/',
        icon: 'compass',
        isActive: false
      },
      {
        title: 'Europe',
        url: '/',
        icon: 'compass',
        isActive: false
      },
      {
        title: 'Asia',
        url: '/',
        icon: 'compass',
        isActive: false
      },
      {
        title: 'North America',
        url: '/',
        icon: 'compass',
        isActive: false
      },
      {
        title: 'South America',
        url: '/',
        icon: 'compass',
        isActive: false
      },
      {
        title: 'Antarctica',
        url: '/',
        icon: 'compass',
        isActive: false
      }
    ]
  },
  {
    title: 'My Trips',
    url: '#',
    icon: 'user',
    isActive: true,
    items: [
      {
        title: 'All Trips',
        url: '/',
        icon: 'compass',
        isActive: false
      },
      {
        title: 'Upcoming Trips',
        url: '/',
        icon: 'compass',
        isActive: false
      },
      {
        title: 'Current Trip',
        url: '/',
        icon: 'compass',
        isActive: false
      },
      {
        title: 'Past Trips',
        url: '/',
        icon: 'compass',
        isActive: false
      }
    ]
  },
  {
    title: 'Employee',
    url: '/dashboard/employee',
    icon: 'user',
    isActive: false,
    items: []
  },
  {
    title: 'Product',
    url: '/dashboard/product',
    icon: 'product',
    isActive: false,
    items: []
  },
  {
    title: 'Account',
    url: '#',
    icon: 'billing',
    isActive: true,
    items: [
      {
        title: 'Profile',
        url: '/dashboard/profile',
        icon: 'userPen',
        isActive: false
      },
      {
        title: 'Login',
        url: '/',
        icon: 'login',
        isActive: false
      }
    ]
  },
  {
    title: 'Kanban',
    url: '/dashboard/kanban',
    icon: 'kanban',
    isActive: false,
    items: []
  }
];
