import { SignUp } from '@clerk/nextjs/app-beta'

export default function SignUpPage() {
  return (
    <>
      <SignUp path='/auth/signup' routing='path' signInUrl='/signin' />
    </>
  )
}
