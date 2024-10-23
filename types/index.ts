import { Icons } from '@/components/icons';

export type NavItem = {
  title: string;
  url: string;
  icon: keyof typeof Icons; // This ensures the icon is a valid key of the Icons object
  isActive: boolean;
  items?: NavItem[]; // Make items optional
};

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;
