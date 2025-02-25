'use client'

import React from 'react'
import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import { IconLogo } from './ui/icons'
import { cn } from '@/lib/utils'

export const Header: React.FC = () => {
  return (
    <header className="fixed w-full p-2 flex justify-between items-center z-10">
      <div className="p-2">
        <a href="/">
          <IconLogo className={cn('w-5 h-5')} />
          <span className="sr-only">Metamorphic</span>
        </a>
      </div>
      <ModeToggle />
    </header>
  )
}

export default Header
