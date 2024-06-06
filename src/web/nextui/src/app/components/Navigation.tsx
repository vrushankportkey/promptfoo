import Link from 'next/link';
import { Stack } from '@mui/material';
import { usePathname } from 'next/navigation';

import Logo from './Logo';
import LoggedInAs from './LoggedInAs';
import DarkMode from './DarkMode';
import { USE_SUPABASE } from '@/constants';

import './Navigation.css';

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname() || '';
  return (
    <Link href={href} className={pathname.startsWith(href) ? 'font-bold' : ''}>
      {label}
    </Link>
  );
}

export default function Navigation({
  darkMode,
  onToggleDarkMode,
}: {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}) {
  if (process.env.NEXT_PUBLIC_NO_BROWSING) {
    return (
      <div className="flex flex-row p-1 pl-4 gap-4 bg-gray-200 mb-4 dark:bg-gray-800">
        <Logo />
        <DarkMode darkMode={darkMode} onToggleDarkMode={onToggleDarkMode} />
      </div>
    );
  }
  return (
    <div className="flex flex-row p-1 pl-4 gap-4 bg-gray-200 mb-4 dark:bg-gray-800">
      <Logo />
      <NavLink href="/setup" label="New Eval" />
      <NavLink href="/eval" label="Evals" />
      <NavLink href="/prompts" label="Prompts" />
      <NavLink href="/datasets" label="Datasets" />
      <NavLink href="/progress" label="Progress" />
      <div className="flex items-center gap-4 ml-auto mr-2">
        {USE_SUPABASE ? <LoggedInAs /> : null}
        <DarkMode darkMode={darkMode} onToggleDarkMode={onToggleDarkMode} />
      </div>
    </div>
  );
}
