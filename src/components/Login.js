import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {
   
    const [isSignedIn, setIsSignedIn] = useState(true);
    const Istoogled = () => {
        setIsSignedIn(!isSignedIn);
    }
  return (
        
    <div className="">
         <Header />
         <div className="absolute">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/ea534f76-b87f-4720-9605-cb29cfd9fefe/web/IN-en-20260810-TRIFECTA-perspective_5a83c581-2878-466b-87a0-19d0bf50f4bc_small.jpg"
        alt="Netflix Background"
      />
      </div>

 

      <form className=" w-3/12 p-12 my-36 mx-auto right-0 left-0 absolute bg-black bg-opacity-80 text-white rounded ">
      <h1 className="text-3xl font-bold mb-4 ">
        {isSignedIn ? "Sign In" : "Sign Up"}
      </h1>
       {!isSignedIn &&
      <input
          type="text"
          placeholder="Name"
          className="p-4 my-4 border rounded w-full"
        />
       }
        <input
          type="email"
          placeholder="Email"
          className="p-4 my-4 border rounded w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 border rounded w-full"
        />
        <button className="p-4 my-6 bg-red-600 text-white rounded w-full">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </button>
        <p>
            {isSignedIn && "New to Netflix?"} <span className="text-blue-600 cursor-pointer"
            onClick={Istoogled}>{isSignedIn ? "Sign up now" : "Already have an account?"}</span>
        </p>
      </form>

    </div>
  )
}

export default Login