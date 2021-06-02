import React, { useState } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import './RegisterScreen.css'

/**
* @author
* @function RegisterScreen
**/

const RegisterScreen = (props) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    
    const registerHandler = (e) => {}

    return (
        <div className='register-screen'>
            <form onSubmit={registerHandler} className='register-screen__form'>
                <h3 className='register-screen__title'>Register</h3>
                <div className='form-group'>
                    <label htmlFor="name">Username:</label>
                    <input
                        type='text'
                        required
                        id='name'
                        placeholder='Enter Username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Email:</label>
                    <input
                        type='email'
                        required
                        id='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="password">Password:</label>
                    <input
                        type='password'
                        required
                        id='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor="confirmpassword">Confirm Password:</label>
                    <input
                        type='password'
                        required
                        id='confirmpassword'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Register</button>
                <span className='register-screen__title'>Already have an account? <Link to='/login' >Login</Link></span>
            </form>
        </div>
    )
}


export default RegisterScreen