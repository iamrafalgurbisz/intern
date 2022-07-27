import React, { PropsWithChildren } from 'react'
import styles from './Layout.module.scss'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return <div className={styles.wrapper}>{children}</div>
}

export default Layout
