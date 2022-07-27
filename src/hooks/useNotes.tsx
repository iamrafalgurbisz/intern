import { useState } from 'react'
import { Note } from '@/typings'

const useNotes = () => {
    const [notes, setNotes] = useState<Note[]>([])

    const handleAddNote = (note: Note) => {
        setNotes((prev) => [note, ...prev])
    }

    return {
        notes,
        addNote: handleAddNote,
    }
}

export default useNotes
