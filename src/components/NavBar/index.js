import { Link } from 'react-router-dom';

//styles
import styles from './styles.module.scss';

import React from 'react'

export default function NavBar() {
    return (

        <nav className={styles.navbarContainer}>
            <ul>
                <h1 className={styles.title}>Finances</h1>
                <li><Link to={'/'}>Home</Link></li>
                <li>
                    <Link to={'/login'}>Login</Link>
                </li>
                <li>
                    <Link to={'/signup'}>Sign up</Link>
                </li>
            </ul>
        </nav >

    )
}
