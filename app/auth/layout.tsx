import { ClerkProvider, currentUser } from '@clerk/nextjs/app-beta'
import type { User } from '@clerk/nextjs/dist/api'
import '../globals.css'
export const dynamic = 'force-dynamic'

export default async function RootLayout(props: { children: React.ReactNode }) {
  const user: User | null = await currentUser()

  return (
    <ClerkProvider>
      <html lang='en' className='h-full'>
        <head />
        <body className='h-full antialiased'>
          <main className='flex h-full w-full items-center justify-center bg-mkblack'>
            {props.children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
