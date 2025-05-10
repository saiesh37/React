import React, { lazy, Suspense, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Components/Header';
import Body from './Components/Body';
import { BrowserRouter, createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Menu from './Components/Menu';
import UserContext from '../utils/UserContext';
// import Grocery from './Components/Grocery';
const Grocery=lazy(()=>import("./Components/Grocery"))
const AppLayout=()=>{
 
  
    const [userName,setUserName]=useState()

    useEffect(()=>{
        const data={
            name :" saiesh"
        }
        setUserName(data.name)
    },[])
    return(
        <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
        <div className="app">
        <UserContext.Provider value={{loggedInUser : "India"}}>
            <Header/>
        </UserContext.Provider>
           <Outlet/>
        </div>
        </UserContext.Provider>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element : <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path:"/",
                element : <Body/>
            },

            {
                path:"/about",
                element : <About/>
            },
            {
                path:"/contact",
                element : <Contact/>
            },
            {
                path:"/cart",
                element : <h1>This is cart page</h1>
            },
            {
                path:"/grocery",
                element : <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            },
            {
                path:"/restaurant/:resId",
                element : <Menu/>
            }

        ]
    },
   
])

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter} />)