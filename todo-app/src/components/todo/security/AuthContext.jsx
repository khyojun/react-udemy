import { createContext, useContext, useState } from "react";
//Create a Context




export const AuthContext = createContext()


export const useAuth = () => useContext(AuthContext)


//Share the create context with other components

export default function AuthProvider({children}){


//Put some state in the context

    const [isAuthenticated, setAuthenticated] = useState(false)


    const [username, setUsername] = useState(null)


    // setInterval(
    //     () => setNumber(number+1),
    //     10000


    // )


    function login(username, password){
        if(username==='khyojun' && password==="dummy"){
            setAuthenticated(true)
            setUsername(username)
            return true
        }
        else{
            setAuthenticated(false)
            setUsername(null)
            return false            
        }
    }

    function logout(){
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={ {isAuthenticated, setAuthenticated,login,logout,username}}>

            {children}
        </AuthContext.Provider>


    )
}

