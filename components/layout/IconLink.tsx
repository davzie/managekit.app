import Link from 'next/link'
import { ReactNode } from 'react'

export default function IconLink({
  route = '',
  name = '',
  icon = '',
}: {
  route: string
  name: string
  icon: ReactNode
}) {
  return (
    <Link
      href='/'
      className='group flex items-center rounded-md bg-white bg-opacity-0 px-3 py-2 font-medium text-gray-400 hover:bg-opacity-10 hover:text-white'
      aria-current='page'
    >
      <svg
        className='-ml-1 mr-3 h-6 w-6 flex-shrink-0 text-gray-400 hover:text-white'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        aria-hidden='true'
      >
        {icon}
      </svg>
      <span className='truncate'>{name}</span>
    </Link>
  )
}
