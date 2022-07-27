import React from 'react'
import { Note } from '@/typings'

interface NotesContextType {
    notes: Note[]
    addNote: (note: Note) => void
}

const NotesContext = React.createContext<NotesContextType>(
    {} as NotesContextType
)

export default NotesContext
