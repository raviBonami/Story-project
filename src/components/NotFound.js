
import React,{useEffect} from 'react'
import {Navigate, useNavigate} from 'react-router-dom'

function NotFound() {
    const nav = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            nav('/')
        },2000)
    },[])

  return (
    <div>
        <h1>Ooops... Page Not Found 404</h1>
    </div>
  )
}

export default NotFound