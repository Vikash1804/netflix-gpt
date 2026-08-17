import React from 'react'
import Login from './Login'

import { createBrowserRouter, RouterProvider as ReactProvider } from 'react-router-dom'
import Browse from './Browse'


const Body = () => {
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
  return (
    <div >
    <ReactProvider router={approuter} />  
    </div> 
  )
}

export default Body
