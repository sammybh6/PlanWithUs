import React from 'react'
import { fetchData } from '../utils/Rest'
import { useState, createContext } from 'react'

export const PackageContext = createContext();
export default function PackageProvider({ children }) {

    const [packageId, setPackageId] = useState();

    const getPackageId = (id) => {
        setPackageId(id);
    }

    const ctx = {
        getPackageId,
        packageId
    }

    return (
        <PackageContext.Provider value={ctx}>
            {children}
        </PackageContext.Provider>
    )
}
