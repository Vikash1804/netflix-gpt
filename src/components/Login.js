import React from 'react'
import Header from './Header'
import Form from './Form'
import { background_img } from '../utils/Constants'

const Login = () => {
  return (
        
    <div className="">
         <Header />
         <div className="absolute">
      <img
        src={background_img}
        alt="Netflix Background"
      />
      </div>
       < Form />
    </div>
  )
}
export default Login