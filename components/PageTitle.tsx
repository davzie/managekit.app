import { ReactNode } from 'react'

export default function PageTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className='mb-8 text-6xl font-extrabold tracking-tight text-[#051924]'>
      {children}
    </h1>
  )
}
