import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import './ResetPasswordScreen.css'

/**
* @author
* @function ResetPasswordScreen
**/

const ResetPasswordScreen = ({ history, match }) => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const resetPasswordHandler = async (e) => {
        e.preventDefault()
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        if (password !== confirmPassword) {
            setPassword('')
            setConfirmPassword('')
            setTimeout(() => {
                setError('')
            }, 5000)
            return setError('Passwords do not match')
        }
        try {
            const { data } = await axios.put(`/api/auth/resetpassword/${match.params.resetToken}`, { password }, config)
            setSuccess(data.data)
        } catch (error) {
            setError(error.response.data.error)
            setTimeout(() => { setError('') }, 5000)
        }
    }

    return (
        <div className='resetpassword-screen'>
            <form onSubmit={resetPasswordHandler} className='resetpassword-screen__form'>
                <h3 className='resetpassword-screen__title'>Reset Password</h3>
                {error && <span className='error-message'>{error}</span>}
                {success && <span className='success-message'>{success} <Link to='/login'>Login</Link></span>}
                <div className='form-group'>
                    <label htmlFor="password">New Password:</label>
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
                    <label htmlFor="confirmpassword">Confirm New Password:</label>
                    <input
                        type='password'
                        required
                        id='confirmpassword'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type='submit' className='btn btn-primary'>Reset Password</button>
            </form>
        </div>
    )
}


export default ResetPasswordScreen