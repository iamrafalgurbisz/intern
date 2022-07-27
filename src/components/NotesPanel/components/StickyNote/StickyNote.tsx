import React from 'react'
import { Note } from '@/typings'
import styles from './StickyNote.module.scss'

interface Props {
    note: Note
}

const StickyNote: React.FC<Props> = ({ note }) => {
    const { text, color } = note

    return (
        <div className={styles.wrapper} style={{ background: color }}>
            <div className={styles.content}>
                <textarea>{text}</textarea>
            </div>
        </div>
    )
}

export default StickyNote
