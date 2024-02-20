import { createContext, useContext, useState } from "react";
//Create a Context




export const AuthContext = createContext()


export const useAuth = () => useContext(AuthContext)


//Share the create context with other components

export default function AuthProvider({children}){


//Put some state in the context

    const [isAuthenticated, setAuthenticated] = useState(false)


    // setInterval(
    //     () => setNumber(number+1),
    //     10000


    // )


    function login(username, password){
        if(username==='khyojun' && password==="dummy"){
            setAuthenticated(true)
            return true
        }
        else{
            setAuthenticated(false)
            return false            
        }
    }

    function logout(){
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={ {isAuthenticated, setAuthenticated,login,logout}}>

            {children}
        </AuthContext.Provider>


    )
}

