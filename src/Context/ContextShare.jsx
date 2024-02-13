import React, { createContext, useState } from 'react'
export const addResponseContext = createContext()
export const updateResponseContext = createContext()


function ContextShare({ children }) {
    const [addResponse, setAddResponse] = useState("")
    const [editResponse, setEditResponse] = useState("")
    return (
        <>
            <addResponseContext.Provider value={{ addResponse, setAddResponse }}>
                <updateResponseContext.Provider value={{editResponse,setEditResponse}} >
                    {children}
                </updateResponseContext.Provider>
            </addResponseContext.Provider>
        </>
    )
}

export default ContextShare