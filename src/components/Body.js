import React, { useEffect } from 'react'
import Login from './Login'

import { createBrowserRouter, RouterProvider as ReactProvider } from 'react-router-dom'
import Browse from './Browse'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { adduser, removeuser } from '../utils/UserSlice'


const Body = () => {
    const dispatch = useDispatch();
    const approuter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path:"/browse",
            element: <Browse /> // Assuming you have a Browse component
        }
    ]


    )


    useEffect(()=>{
     onAuthStateChanged(auth, (user) => {
        if (user) {
        const {email , uid , displayName}= user;
         dispatch(adduser({email : email , uid : uid , displayName : displayName}));
  // Profile updated!
    // ...
       } else {

    dispatch(removeuser());
    // ...
  }
});
    },[])
  return (
    <div >
    <ReactProvider router={approuter} />  
    </div> 
  )
}

export default Body
