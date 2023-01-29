import { SignUp } from '@clerk/nextjs/app-beta'

export const dynamic = 'force-dynamic'
export default function SignUpPage() {
  return (
    <>
      <SignUp path='/auth/signup' routing='path' signInUrl='/signin' />
    </>
  )
}
