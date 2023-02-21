import styles from './styles.module.scss';

import React, { useState } from 'react'

export default function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(username, email, password)
    }

    return (
        <>
            <form onSubmit={handleSubmit}
                className={styles['signup-form']}>
                <h2>Sign up</h2>

                <label>
                    <span>user name:</span>
                    <input type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>

                <label>
                    <span>email:</span>
                    <input type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </label>

                <label>
                    <span>password:</span>
                    <input type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                    <span>confirm password:</span>
                    <input type="password"
                        value={confirmPass}
                        onChange={(e) => setConfirmPass(e.target.value)} />
                </label>
                <button className={styles.btn}>sign up</button>
            </form>
        </>
    )
}
