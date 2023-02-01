import Note from '@/components/Note'
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

export default function NotesPage({ notes }: { notes: notes[] }) {
  return (
    <>
      <PageTitle>Daily Notes</PageTitle>

      {notes.map((note) => (
        <Note
          key={`note-` + note.id}
          date={note.date}
          note={note.note?.toString() || ''}
        />
      ))}
    </>
  )
}
