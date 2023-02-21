import React, { useState } from 'react'
import styles from './styles.module.scss';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const heandleSubmit = (e) => {
        e.preventDefault()

        console.log(email, password)
    }

    return (
        <>
            <form className={styles['login-form']}
                onSubmit={heandleSubmit} >

                <h2>Login:</h2>
                <label>
                    <span>email:</span>
                    <input type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    <span>Password</span>
                    <input type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button
                    className={styles.btn}
                >Login</button>
            </form>
        </>
    )
}
