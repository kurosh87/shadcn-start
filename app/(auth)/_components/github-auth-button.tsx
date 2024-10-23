'use client';

import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

export default function GithubSignInButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get('callbackUrl') || '/dashboard';

  return (
    <Button
      className="w-full"
      onClick={() => signIn('github', { callbackUrl })}
    >
      <Github className="mr-2 h-4 w-4" />
      Continue with Github
    </Button>
  );
}
