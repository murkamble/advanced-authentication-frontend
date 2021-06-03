import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import './ForgotPasswordScreen.css'

/**
* @author
* @function ForgotPasswordScreen
**/

const ForgotPasswordScreen = (props) => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const forgotPasswordHandler = async (e) => {
        e.preventDefault()
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            const { data } = await axios.post('/api/auth/forgotpassword', { email }, config)
            setSuccess(data.data)
        } catch (error) {
            setError(error.response.data.error)
            setEmail('')
            setTimeout(() => { setError('') }, 5000)
        }
    }

    return (
        <div className='forgotpassword-screen'>
            <form onSubmit={forgotPasswordHandler} className='forgotpassword-screen__form'>
                <h3 className='forgotpassword-screen__title'>Forgot Password</h3>
                {error && <span className='error-message'>{error}</span>}
                {success && <span className='success-message'>{success}</span>}
                <div className='form-group'>
                    <p>
                        Please enter the email address you register your account with.
                        We will send you reset password confirmation to this email
                    </p>
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
                <button type='submit' className='btn btn-primary'>Send Email</button>
            </form>
        </div>
    )
}

export default ForgotPasswordScreen