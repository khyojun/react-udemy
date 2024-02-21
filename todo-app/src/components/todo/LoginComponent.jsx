
import { useState } from 'react'
import {useNavigate} from 'react-router-dom' // 다른 페이지로 이동하기 위한 import
import { useAuth } from './security/AuthContext'


function LoginComponent() {


    const [username, setUsername]=useState("khyojun")

    const [password, setPassword] = useState('')
 

    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate();

    const authContext = useAuth()

    function handleUsernameChange(event){
        setUsername(event.target.value)
    }


    function handlePasswordChange(event){
        setPassword(event.target.value)
    }


    async function handleSubmit() {


        if(await authContext.login(username,password)){
             navigate(`/welcome/${username}`)
        }
        else{
            setShowErrorMessage(true)
         }
    }



    return (
        <div className="Login">
            <h1> Login Page! </h1>
            {showErrorMessage && <div className='errorMessage'>Authenticated Failed. Please check your credentials.</div>}
            <div className="LoginForm">
                <div>
                    <label>Username</label>
                    <input type="text" name='username' value={username} onChange={handleUsernameChange}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name='password' value={password} onChange={handlePasswordChange}></input>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
            
        </div>
    )
}


export default LoginComponent