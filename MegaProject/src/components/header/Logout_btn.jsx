import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import  {logout}  from '../../Store/authSlice'

function Logout_btn() {

    const dispatch = useDispatch()
    const LogoutHandler = () => {
        authService.logout()
            .then (() => {
                dispatch(logout())
            })
    }

  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-300 rounded-full' onClick={LogoutHandler}>Logout</button>
  )
}

export default Logout_btn