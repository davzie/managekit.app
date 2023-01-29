import { withClerkMiddleware, getAuth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Set the paths that don't require the user to be signed in
const publicPaths = ['/auth/signin', '/auth/signup', '/auth/signout', '/auth/*']

const isPublic = (path: string) => {
  return publicPaths.find((x) =>
    path.match(new RegExp(`^${x}$`.replace('*$', '($|/)')))
  )
}
export default withClerkMiddleware((req: NextRequest) => {
  if (isPublic(req.nextUrl.pathname)) {
    return NextResponse.next()
  }

  // if the user is not signed in redirect them to the sign in page.
  const { userId } = getAuth(req)

  if (!userId) {
    const signInUrl = new URL('/auth/signin', req.url)
    signInUrl.searchParams.set('redirect_url', req.url)
    return NextResponse.redirect(signInUrl)
  }
  return NextResponse.next()
})

// Stop Middleware running on static files
export const config = { matcher: '/((?!.*\\.).*)' }
