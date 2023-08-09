import axios from "axios"
import { createContext, useState, useEffect } from "react"
import {auth} from "../config/firebase"

export const UserContext = createContext({})

export function UserContextProvider({children}){
    const [user, setUser] = useState(null)
    useEffect(() =>{
        if(!user){
            axios.get('')
        }
    })
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}