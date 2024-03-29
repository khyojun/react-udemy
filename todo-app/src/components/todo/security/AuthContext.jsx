import { createContext, useContext, useState } from "react";
import { executeJwtAuthenticationService } from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";
//Create a Context




export const AuthContext = createContext()


export const useAuth = () => useContext(AuthContext)


//Share the create context with other components

export default function AuthProvider({children}){


//Put some state in the context

    const [isAuthenticated, setAuthenticated] = useState(false)


    const [username, setUsername] = useState(null)

    const [token, setToken] = useState(null)


    // setInterval(
    //     () => setNumber(number+1),
    //     10000


    // )


    // function login(username, password){
    //     if(username==='khyojun' && password==="dummy"){
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true
    //     }
    //     else{
    //         setAuthenticated(false)
    //         setUsername(null)
    //         return false            
    //     }
    // }


    // async function login(username, password){
        

    //     const baToken = 'Basic ' + window.btoa(username + ":" + password) // base64 인코딩 표준 입력방식

    //     try{
    //         const response = await executeBasicAuthenticationService(baToken)
            

    //         setAuthenticated(false)
            
    //         if(response.status==200){
    //             setAuthenticated(true)
    //             setUsername(username)
    //             setToken(baToken)

    //             apiClient.interceptors.request.use(
    //                 (config) => {
    //                     console.log('intercepting and adding a token')
    //                     config.headers.Authorization=baToken
    //                     return config
    //                 }
    //             )



    //             return true
    //         }
    //         else{
    //             logout()
    //             return false            
    //         }

    //     }catch(error){
    //         logout()
    //         return false   
    //     }
    // }
    async function login(username, password){
        


        try{
            const response = await executeJwtAuthenticationService(username, password)
            

            setAuthenticated(false)
            
            if(response.status==200){
                const jwtToken = 'Bearer ' + response.data.token 
                console.log(jwtToken)
                setAuthenticated(true)
                setUsername(username)
                setToken(jwtToken)

                apiClient.interceptors.request.use(
                    (config) => {
                        console.log('intercepting and adding a token')
                        config.headers.Authorization=jwtToken
                        return config
                    }
                )



                return true
            }
            else{
                logout()
                return false            
            }

        }catch(error){
            logout()
            return false   
        }
    }


    function logout(){
        setAuthenticated(false)
        setUsername(null)
        setToken(null)
    }

    return (
        <AuthContext.Provider value={ {isAuthenticated, setAuthenticated,login,logout,username,token}}>

            {children}
        </AuthContext.Provider>


    )
}

