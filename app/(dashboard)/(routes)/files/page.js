import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Files = () => {
  return (
    <div>
      Files
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default Files
