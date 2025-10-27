import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import { login, logout } from './Store/authSlice'
import { Footer, Header } from './components/index'
import { Outlet } from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if(userData){
          dispatch(login({userData}))
        }else{
          dispatch(logout())
        }
      } )
      .finally(() => setLoading(false))
  }, [])

  return !loading ? 
  ( <div className='w-full text-center bg-gray-800 min-h-screen'>
    <div className='w-full block'>
      <Header />
        <Outlet />
      <Footer />
    </div>
  </div> )
  :
  <div className='w-full h-full text-red-500'>Loding...</div>
}

export default App
