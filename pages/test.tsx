import PageTitle from '@/components/PageTitle'
import prisma from '@/lib/prisma'
import { notes } from '@prisma/client'

export async function getServerSideProps() {
  const notes = await prisma.notes.findMany({
    include: {
      users: {
        select: { name: true },
      },
    },
  })

  return {
    props: { notes },
  }
}

export default function OverviewPage({ notes }: { notes: notes[] }) {
  return (
    <>
      <PageTitle>Test</PageTitle>

      {notes.map((note) => (
        <div key={note.id}>
          <p>{note.note}</p>
        </div>
      ))}
    </>
  )
}
