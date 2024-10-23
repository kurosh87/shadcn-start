import Link from 'next/link';

export function MainNav() {
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {/* ... existing navigation items */}
      <Link
        href="/explore"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Explore
      </Link>
    </nav>
  );
}
