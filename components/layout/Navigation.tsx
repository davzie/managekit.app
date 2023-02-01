'use client'

import {
  FolderIcon,
  HomeIcon,
  PencilSquareIcon,
  UserIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import IconLink from './IconLink'

export default function Navigation() {
  return (
    <>
      <div className='space-y-1'>
        <IconLink route='/' name='Overview' icon={<HomeIcon />} />

        <IconLink route='test' name='Test' icon={<HomeIcon />} />

        <IconLink route='/' name='My File' icon={<FolderIcon />} />

        <IconLink route='/' name='Daily Notes' icon={<PencilSquareIcon />} />
      </div>

      <div className='mt-8'>
        <h4 className='mb-2 text-lg font-bold tracking-tight text-white'>
          Managed Files
        </h4>
        <div className='mt-1 space-y-1' aria-labelledby='projects-headline'>
          <IconLink route='/' name='Team' icon={<UsersIcon />} />

          <IconLink route='/' name='Employee 1' icon={<UserIcon />} />
          <IconLink route='/' name='Employee 2' icon={<UserIcon />} />
          <IconLink route='/' name='Employee 3' icon={<UserIcon />} />
        </div>
      </div>
    </>
  )
}
