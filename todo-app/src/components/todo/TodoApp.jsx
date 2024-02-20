import { useState } from 'react'
import {BrowserRouter, Routes, Route,useNavigate, useParams, Link, Navigate} from 'react-router-dom' // 다른 페이지로 이동하기 위한 import

import LogoutComponent from './LogoutComponent'
import HeaderComponent from './HeaderComponent'
import ListComponent from './ListComponent'
import ErrorComponent from './ErrorComponent'
import WelcomComponent from './WelcomeComponent'
import LoginComponent from './LoginComponent'
import AuthProvider, { useAuth } from './security/AuthContext'
import './TodoApp.css' 



function AuthenticatedRoute({children}){

    const authContext = useAuth()
    if(authContext.isAuthenticated){
        return children
    }
    else{
        return <Navigate to="/" />
    }

}

// * 로 이상한 url 입력하면 errorComponent로
// :~ 파라미터로 받음, useParams 를 통해 받음.
// a 태그를 사용하지 않고 react router dom의 link를 통해 옮기면 네트워크 활동이 없다. 즉, 새로고침 없이 활동한 것이다. 
export default function TodoApp() {
    return (
        <div className="TodoApp">
            <AuthProvider>
                <BrowserRouter>
                <HeaderComponent/>
                    <Routes>
                        <Route path='/' element={<LoginComponent/>}/>
                        <Route path='/login' element={<LoginComponent/>}/>
                        <Route path='*' element={<ErrorComponent/>}/> 
                        <Route path='/logout' element={
                        <AuthenticatedRoute>
                            <LogoutComponent/>
                        </AuthenticatedRoute>
                        
                        }/> 
                        <Route path='/welcome/:username' element={
                        <AuthenticatedRoute>
                            <WelcomComponent/>
                        </AuthenticatedRoute>
                        }/>

                        <Route path='/todos' element={
                        <AuthenticatedRoute>
                            <ListComponent/>
                        </AuthenticatedRoute>
                        
                        }/> 

                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>

    )
}























