// This mechanism is to protect authentication routes

import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function AuthLayout({children, authentication = true}) {

    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    const authStatus = useSelector((state) => state.status)

    useEffect(() => {
        // TODO MAKE IT MORE EASY
        if(authentication && authStatus !== authentication ){
            navigate("/login")
        }   
        else if (!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoading(false)
    }, [authStatus, navigate, authentication])

  return (
    <>
        {
            loading ? 'loading...' : {children}
        }
    </>
  )
}

export default AuthLayout