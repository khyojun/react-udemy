import {useParams, Link} from 'react-router-dom' // 다른 페이지로 이동하기 위한 import
import { useState } from 'react'
import { retrieveHelloWorldBean, retrieveHelloWorldBeanPathVariable } from './api/HelloWorldApiService'
import { useAuth } from './security/AuthContext'

function WelcomComponent() {

    const {username} = useParams() // username 에 매칭된 것을 자동으로 username에 넣음.


    const authContext = useAuth()


    const [message, setMessage] = useState(null)

    
    function callHelloWorldRestApi(){
   
        retrieveHelloWorldBeanPathVariable('khyojun', authContext.token)
            .then((response) => successfulResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('clean up'))

   
    }    

    function successfulResponse(response){
        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponse(error){
        console.log(error)
        
    }

    return (
        <div>
            <h1> Welcome {username}! </h1>
            <div className="Welcome">
                Manage Your todos. <Link to="/todos">Go here</Link>
            </div>
            <div>
                <button className='btn btn-success' onClick={callHelloWorldRestApi}>
                    Call Hello World
                </button>

            </div>
            <div className='text-info'>{message}</div>
        </div>
    )
}

export default WelcomComponent