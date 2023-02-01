import * as AvatarRadix from '@radix-ui/react-avatar'

export default function Avatar({
  src = '#',
  name = '',
}: {
  src: string
  name: string
}) {
  const userInitials: string = getInitials(name)
  return (
    <AvatarRadix.Root className='h-9 w-9 rounded-full'>
      {false && (
        <AvatarRadix.Image
          className='inline-block h-9 w-9 rounded-full'
          src={src}
          alt={name}
        />
      )}
      <AvatarRadix.Fallback className='rounded-full bg-mkpurple p-2 text-white'>
        {userInitials}
      </AvatarRadix.Fallback>
    </AvatarRadix.Root>
  )
}

function getInitials(name: string): string {
  const matches = name.match(/\b(\w)/g)
  if (!matches || matches.length === 0) {
    return '??'
  }

  return matches.join('').substring(0, 2)
}
