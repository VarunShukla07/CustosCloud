import { UserButton } from '@clerk/nextjs';
import { AlignJustify } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

function TopHeader({ toggleSidebar }) {
  return (
    <div className='flex p-5 border-b items-center justify-between md:justify-end'>
        <AlignJustify className='md:hidden cursor-pointer' onClick={toggleSidebar} />
        <Image src='/logo.svg' width={80} height={80} className="md:hidden" alt="Logo" />
        <UserButton />
    </div>
  );
}

export default TopHeader;
