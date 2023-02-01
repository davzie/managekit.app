import Link from 'next/link'
import Avatar from './Avatar'

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
            <Avatar name={username} src='#' />
          </div>
          <div className='ml-3'>
            <p className='text-sm font-medium text-white'>
              <Link className='hover:text-gray-200' href='/'>
                {username}
              </Link>
            </p>
            <p className='text-xs font-medium text-gray-500'>
              <Link href='/settings' className='hover:text-gray-200'>
                Settings
              </Link>{' '}
              /{' '}
              <Link className='hover:text-gray-200' href='/'>
                Logout
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
