import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../store/auth'
export default function Logout() {
    const {logOutUser} = useAuth();

useEffect(()=>{
    logOutUser();
},[logOutUser]);
  return <Navigate to="/login"/>
}
