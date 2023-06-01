import { fetchData } from '../utils/Rest'
import { useState, useEffect, createContext } from 'react'

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    const [user, setUser] = useState();
    const [token, setToken] = useState();


    const fetchUser = async () => {
        const tok = window.cookie;
        setToken(tok)
        const res = await fetchData('auth/getuser', true, token)
        console.log(res);
        setUser(res);
    }

    const ctx = {
        fetchUser,
        user
    }

    return (
        <AuthContext.Provider value={ctx}>
            {children}
        </AuthContext.Provider>
    )
}