import React, { useEffect, useMemo } from 'react'
import { Layout, Sidebar } from '@/components'
import '@/styles/_global.scss'
import { useNotes } from '@/hooks'
import NotesContext from './context/notesContext'
import NotesPanel from './components/NotesPanel'

const App = () => {
    const { notes, addNote } = useNotes()

    const notesContextValue = useMemo(
        () => ({
            notes,
            addNote,
        }),
        [notes, addNote]
    )

    useEffect(() => {
        console.log(notes)
    }, [notes])

    return (
        <NotesContext.Provider value={notesContextValue}>
            <Layout>
                <Sidebar />
                <NotesPanel />
            </Layout>
        </NotesContext.Provider>
    )
}

export default App
