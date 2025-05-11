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
import { Provider } from 'react-redux';
import appStore from '../utils/appStore';
import Cart from './Cart';



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
        <>
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
        <div className="app">
        <UserContext.Provider value={{loggedInUser : "India"}}>
            <Header/>
        </UserContext.Provider>
           <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
        </>
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
                element : <Cart/>
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