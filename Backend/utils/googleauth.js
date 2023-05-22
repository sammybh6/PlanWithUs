const axios = require('axios')
const express = require('express')



async function getGoogleOAuthToken(code) {
    const url = 'https://oauth2.googleapis.com/token'
    const values = {
        code,
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SEC,
        redirect_uri: 'http://localhost:3000/google',
        grant_type: 'authorization_code',
    }
    try {
        const response = await axios.post(url, new URLSearchParams(values), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        return response.data
    } catch (error) {
        console.error(error.message)
        // throw new NotAcceptableException(error.message)
    }
}

exports.googleLoginCallBack = async (code) => {
    const data = await getGoogleOAuthToken(code)
    console.log(data)
}

// module.exports = googleLoginCallBack;
