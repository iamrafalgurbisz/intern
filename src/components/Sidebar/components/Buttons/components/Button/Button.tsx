import React, { useContext } from 'react'
import NotesContext from '@/context/notesContext'
import styles from './Button.module.scss'

interface Props {
    color: string
}

const Button: React.FC<Props> = ({ color }) => {
    const { addNote } = useContext(NotesContext)

    const handleAddNote = () => {
        addNote({
            color,
            text: 'This is my note...',
        })
    }

    return (
        // eslint-disable-next-line jsx-a11y/control-has-associated-label
        <button
            type="button"
            onClick={handleAddNote}
            className={styles.circle}
            style={{ background: color }}
        />
    )
}

export default Button
