import React from 'react'
import styles from './Sidebar.module.scss'
import { Buttons } from './components'

const Sidebar: React.FC = () => {
    return (
        <div>
            <p className={styles.brand}>
                <span>NOTATKI</span>.COM
            </p>
            <Buttons />
        </div>
    )
}

export default Sidebar
