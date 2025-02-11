import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';

export default async function Dashboard() {
  const session = await auth();
  const headersList = headers();
  const domain = headersList.get('host') || '';
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const baseUrl = `${protocol}://${domain}`;

  if (!session?.user) {
    return redirect(baseUrl);
  }

  return redirect(`${baseUrl}/dashboard/overview`);
}
