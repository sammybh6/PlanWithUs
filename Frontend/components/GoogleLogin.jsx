import axios from 'axios';
import React from 'react'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function GoogleLogin() {
    const [searchParams,] = useSearchParams();
    useEffect(() => {
        userLoginHandler();
    })
    const userLoginHandler = async () => {
        const code = searchParams.get('code');
        console.log(code);
        const res = await axios.post('http://localhost:8000/api/v1/auth', {
            code: code
        })
        // window.location.assign('/')
        window.location.assign('/')
    }
}
