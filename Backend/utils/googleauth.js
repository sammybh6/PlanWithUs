const axios = require('axios')
const express = require('express')
const {OAuth2Client} = require('google-auth-library');



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

    if(data)
    {

        console.log(data.id_token)
        const { id_token } = data
        //verifying at backend using id token obtained  by google servers
        const client = new OAuth2Client(process.env.CLIENT_ID);

        async function verify() 
        {
            const ticket = await client.verifyIdToken({
                idToken: id_token,
                audience: process.env.CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
                // Or, if multiple clients access the backend:
                //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
            });
            const payload = ticket.getPayload();
            const userid = payload['sub'];
            console.log(payload)
            
        }
        verify().catch(console.error);
    }
}


