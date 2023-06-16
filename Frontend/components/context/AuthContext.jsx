import { fetchData } from '../utils/Rest'
import { useState, useEffect, createContext } from 'react'

export const AuthContext = createContext();
export default function AuthProvider({ children }) {

    const [user, setUser] = useState();
    const [userDetails, setUserDetails] = useState();


    const fetchUser = async () => {
        const res = await fetchData('auth/getuser', true)
        console.log(res);
        setUserDetails(res.data.data);
    }

    const logout = () => {
        setUser(null);
    }

    const login = (user) => {
        setUser(userDetails);
    }

    const ctx = {
        fetchUser,
        user,
        logout,
        login
    }

    useEffect(() => {
        fetchUser();
    }, [])


    return (
        <AuthContext.Provider value={ctx}>
            {children}
        </AuthContext.Provider>
    )
}

