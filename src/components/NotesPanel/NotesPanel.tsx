import React, { useContext } from 'react'
import NotesContext from '@/context/notesContext'
import { StickyNote } from './components'
import styles from './NotesPanel.module.scss'

const NotesPanel: React.FC = () => {
    const { notes } = useContext(NotesContext)
    return (
        <div className={styles.wrapper}>
            {notes.map((note) => (
                <StickyNote note={note} />
            ))}
        </div>
    )
}

export default NotesPanel
