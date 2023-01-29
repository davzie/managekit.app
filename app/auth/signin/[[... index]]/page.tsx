'use client'
import { SignIn } from '@clerk/nextjs/app-beta'

export default function SignInPage() {
  return (
    <>
      <SignIn path='/auth/signin' routing='path' signUpUrl='/auth/signup' />
    </>
  )
}
