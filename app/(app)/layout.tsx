import NavFooter from '@/components/layout/NavFooter'
import Navigation from '@/components/layout/Navigation'
import { ClerkProvider, currentUser } from '@clerk/nextjs/app-beta'
import type { User } from '@clerk/nextjs/dist/api'
import '../globals.css'

export default async function RootLayout(props: { children: React.ReactNode }) {
  const user: User | null = await currentUser()
  const username: string =
    (user?.firstName || '') + ' ' + (user?.lastName || '')

  return (
    <ClerkProvider>
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
                    <div className='flex flex-shrink-0 items-center p-6'>
                      <img
                        className='h-8 w-auto'
                        src='img/logo-inverse.svg'
                        alt='ManageKit'
                      />
                    </div>
                    <nav className='mt-5 px-4'>
                      <Navigation />
                    </nav>
                  </div>
                  <NavFooter username={username}></NavFooter>
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
                    <Navigation />
                  </nav>
                </div>
                <NavFooter username={username} />
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
                    <div className='py-4'>{props.children}</div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
