import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({isLogged}) => {
    if(isLogged){
        return <Outlet/>
    }else{
     return <Navigate  to ='/Login'/>
    }
}

export default ProtectedRoute