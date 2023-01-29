'use client'
import { SignUp } from '@clerk/nextjs/app-beta/client'

export default function SignUpPage() {
  return (
    <>
      <SignUp path='/auth/signup' routing='path' signInUrl='/signin' />
    </>
  )
}
