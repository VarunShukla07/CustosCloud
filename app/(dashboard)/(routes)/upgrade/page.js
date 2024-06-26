import { UserProfile } from '@clerk/nextjs';
import React from 'react';

function Upgrade() {
  return (
    <div className='flex items-center justify-center h-full'>
      <UserProfile routing="hash" />
    </div>
  );
}

export default Upgrade;
