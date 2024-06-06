import Image from 'next/image';
import Box from '@mui/material/Box';

import './Logo.css';

export default function Logo() {
  return (
    <div className="flex items-center gap-2 bg-gray-200 p-0 pr-8 rounded-md dark:bg-gray-800">
      <img className="w-6 mt-0.5 dark:invert" src="/logo.svg" alt="Promptfoo logo" />
      <span className="font-mono text-gray-800 dark:text-gray-200">promptfoo</span>
    </div>
  );
}
