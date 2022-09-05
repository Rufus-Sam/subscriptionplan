import React from 'react'
import {Link } from 'react-router-dom'

const HomeScreen = () => {
  return (
    <>
      Welcome to Subscription plans
      <Link to='/login' className='enter'>
        Enter
       </Link>
    </>
  )
}

export default HomeScreen
