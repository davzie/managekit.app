import NavFooter from '@/components/layout/NavFooter'
import Navigation from '@/components/layout/Navigation'
import Head from 'next/head'
import Image from 'next/image'

export default function Layout(props: { children: React.ReactNode }) {
  //   const user: User | null = await currentUser()
  //   const username: string =
  // (user?.firstName || '') + ' ' + (user?.lastName || '')
  const username: string = 'David Thorpe'

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <title>
          ManageKit - Report and employee management toolkit for managers and
          leaders
        </title>

        <meta
          property='og:title'
          content='ManageKit - Employee and report management tool for managers and leaders.'
        />
        <meta property='og:image' content='/img/og.jpg' />
        <meta
          property='og:description'
          content="ManageKit helps you log your report's goals, achievements and areas for improvement and uses AI to help you mentor them to where they want to be."
        />
        <meta property='og:url' content='/' />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicons/apple-touch-icon.png?v=341'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicons/favicon-32x32.png?v=341'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicons/favicon-16x16.png?v=341'
        />
        <link rel='manifest' href='/favicons/site.webmanifest?v=341' />
        <link
          rel='mask-icon'
          href='/favicons/safari-pinned-tab.svg?v=341'
          color='#5bbad5'
        />
        <link rel='shortcut icon' href='/favicons/favicon.ico?v=341' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta
          name='msapplication-config'
          content='/favicons/browserconfig.xml?v=341'
        />
        <meta name='theme-color' content='#ffffff' />
      </Head>

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
                  <Image
                    width='0'
                    height='0'
                    sizes='100vw'
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
                <Image
                  width='0'
                  height='0'
                  sizes='100vw'
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
    </>
  )
}
