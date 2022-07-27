import React from 'react'
import { NOTE_COLOR } from '@/commons'
import { Button } from './components'
import styles from './Buttons.module.scss'

const COLORS = [NOTE_COLOR.YELLOW, NOTE_COLOR.RED, NOTE_COLOR.BLUE]

const Buttons: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            {COLORS.map((color) => (
                <Button color={color} />
            ))}
        </div>
    )
}

export default Buttons
