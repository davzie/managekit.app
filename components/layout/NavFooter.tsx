'use client'

import * as Avatar from '@radix-ui/react-avatar'
import Link from 'next/link'
import type { User } from '@clerk/nextjs/dist/api'

function getInitials(name: string): string {
  const matches = name.match(/\b(\w)/g)
  if (!matches || matches.length === 0) {
    return '??'
  }

  return matches.join('').substring(0, 2)
}

export default function NavFooter({ username }: { username: string }) {
  const userInitials: string = getInitials(username)

  return (
    <div className='flex flex-shrink-0 border-t border-gray-800 p-4'>
      <div className='group block w-full flex-shrink-0'>
        <div className='flex items-center'>
          <div>
            <Avatar.Root className='h-9 w-9 rounded-full'>
              {false && (
                <Avatar.Image
                  className='inline-block h-9 w-9 rounded-full'
                  src='https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80'
                  alt={username}
                />
              )}
              <Avatar.Fallback className='rounded-full bg-mkpurple p-2 text-white'>
                {userInitials}
              </Avatar.Fallback>
            </Avatar.Root>
          </div>
          <div className='ml-3'>
            <p className='text-sm font-medium text-white'>
              <a className='hover:text-gray-200' href='/'>
                {username}
              </a>
            </p>
            <p className='text-xs font-medium text-gray-500'>
              <Link href='/settings' className='hover:text-gray-200'>
                Settings
              </Link>{' '}
              /{' '}
              <a className='hover:text-gray-200' href='/'>
                Logout
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
