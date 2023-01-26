import IconLink from '@/components/layout/IconLink'
import NavFooter from '@/components/layout/NavFooter'
import { Inter } from '@next/font/google'
import '../globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='h-full'>
      <head />
      <body className='h-full antialiased'>
        <div>
          <div
            className='relative z-40 md:hidden'
            role='dialog'
            aria-modal='true'
          >
            <div className='fixed inset-0 bg-gray-600 bg-opacity-75'></div>
            <div className='fixed inset-0 z-40 flex'>
              <div className='relative flex w-full max-w-xs flex-1 flex-col bg-[#020F22]'>
                <div className='absolute top-0 right-0 -mr-12 pt-2'>
                  <button
                    type='button'
                    className='ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                  >
                    <span className='sr-only'>Close sidebar</span>
                    <svg
                      className='h-6 w-6 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>

                <div className='h-0 flex-1 overflow-y-auto pt-5 pb-4'>
                  <div className='flex flex-shrink-0 items-center p-4'>
                    <img
                      className='h-8 w-auto'
                      src='img/logo-inverse.svg'
                      alt='ManageKit'
                    />
                  </div>
                  <nav className='mt-5 space-y-1 px-2'>
                    <a
                      href='/'
                      className='group flex items-center rounded-md bg-white bg-opacity-10 px-2 py-2 text-base font-medium text-gray-900'
                    >
                      <svg
                        className='mr-4 h-6 w-6 flex-shrink-0 text-gray-500'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                        />
                      </svg>
                      My Overview
                    </a>

                    <a
                      href='#'
                      className='group flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    >
                      <svg
                        className='mr-4 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
                        />
                      </svg>
                      Team
                    </a>

                    <a
                      href='#'
                      className='group flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    >
                      <svg
                        className='mr-4 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z'
                        />
                      </svg>
                      Projects
                    </a>

                    <a
                      href='#'
                      className='group flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    >
                      <svg
                        className='mr-4 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5'
                        />
                      </svg>
                      Calendar
                    </a>

                    <a
                      href='#'
                      className='group flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    >
                      <svg
                        className='mr-4 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z'
                        />
                      </svg>
                      Documents
                    </a>

                    <a
                      href='#'
                      className='group flex items-center rounded-md px-2 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    >
                      <svg
                        className='mr-4 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z'
                        />
                      </svg>
                      Reports
                    </a>
                  </nav>
                </div>
                <div className='flex flex-shrink-0 border-t border-gray-200 p-4'>
                  <a href='#' className='group block flex-shrink-0'>
                    <div className='flex items-center'>
                      <div>
                        <img
                          className='inline-block h-10 w-10 rounded-full'
                          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                          alt=''
                        />
                      </div>
                      <div className='ml-3'>
                        <p className='text-base font-medium text-gray-700 group-hover:text-gray-900'>
                          Tom Cook
                        </p>
                        <p className='text-sm font-medium text-gray-500 group-hover:text-gray-700'>
                          View profile
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className='w-14 flex-shrink-0'></div>
            </div>
          </div>

          <div className='hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col'>
            <div className='flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-[#020F22]'>
              <div className='flex flex-1 flex-col overflow-y-auto pt-5 pb-4'>
                <div className='flex flex-shrink-0 items-center p-6'>
                  <img
                    className='h-8 w-auto'
                    src='/img/logo-inverse.svg'
                    alt='ManageKit'
                  />
                </div>

                <nav aria-label='Sidebar' className='px-4'>
                  <div className='space-y-1'>
                    <IconLink
                      route='/'
                      name='Overview'
                      icon={
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                        />
                      }
                    ></IconLink>

                    <IconLink
                      route='/'
                      name='My File'
                      icon={
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z'
                        />
                      }
                    ></IconLink>

                    <IconLink
                      route='/'
                      name='Daily Notes'
                      icon={
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
                        />
                      }
                    ></IconLink>
                  </div>

                  <div className='mt-8'>
                    <h4 className='mb-2 text-lg font-bold tracking-tight text-white'>
                      Managed Files
                    </h4>
                    <div
                      className='mt-1 space-y-1'
                      aria-labelledby='projects-headline'
                    >
                      <IconLink
                        route='/'
                        name='Team'
                        icon={
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
                          />
                        }
                      ></IconLink>

                      <IconLink
                        route='/'
                        name='Employee 1'
                        icon={
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                          />
                        }
                      ></IconLink>

                      <IconLink
                        route='/'
                        name='Employee 2'
                        icon={
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                          />
                        }
                      ></IconLink>

                      <IconLink
                        route='/'
                        name='Employee 3'
                        icon={
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                          />
                        }
                      ></IconLink>
                    </div>
                  </div>
                </nav>
              </div>
              <NavFooter></NavFooter>
            </div>
          </div>
          <div className='flex flex-1 flex-col md:pl-64'>
            <div className='sticky top-0 z-10 bg-white pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden'>
              <button
                type='button'
                className='-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
              >
                <span className='sr-only'>Open sidebar</span>

                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                  />
                </svg>
              </button>
            </div>
            <main className='flex-1'>
              <div className='py-6'>
                <div className='relative mx-auto max-w-7xl px-4 sm:px-6 md:px-8'>
                  <div className='py-4'>{children}</div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
