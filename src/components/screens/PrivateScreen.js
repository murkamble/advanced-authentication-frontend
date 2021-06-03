import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import './PrivateScreen.css'

/**
* @author
* @function PrivateScreen
**/

const PrivateScreen = ({ history }) => {

    const [privateData, setPrivateData] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        if (!localStorage.getItem('authToken')) {
            history.push('/login')
        }
        const fetchPrivateData = async () => {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem('authToken')}`
                }
            }
            try {
                const { data } = await axios.get('/api/private', config)
                setPrivateData(data.data)
            } catch (error) {
                localStorage.removeItem('authToken')
                setError('You are not authorized please login')
            }
        }
        fetchPrivateData()
    }, [history])

    const logoutHandler = () => {
        localStorage.removeItem('authToken')
        history.push('/login')
    }

    return (
        <div>
            {
                error ? <span className='error-message'>{error}</span> : <>
                    <div
                        style={{ background: 'green', color: 'white' }}
                    >{privateData}</div>
                    <button onClick={logoutHandler}>Logout</button>
                </>
            }
        </div>
    )
}


export default PrivateScreen