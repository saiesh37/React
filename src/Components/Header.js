import React, { useContext, useState } from 'react';
import { LOGO_URL } from '../../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';
import UserContext from '../../utils/UserContext';
import { useSelector } from 'react-redux';
import { addItems } from '../../utils/CartSlice';

const Header=()=>{

    const loggedUser=useContext(UserContext)
    const [lgbtn,setLgbtn]=useState("Login")
   

    const handleLogin=()=>{
        lgbtn==="Login" ? setLgbtn("Logout") : setLgbtn("Login")
    }
//sunscribe to store using selector
    const cartItems=useSelector((store)=>store.cart.items)
    console.log("cart",cartItems)
    const onlineStatus=useOnlineStatus()
    return (
        <div className="flex justify-between">
            <div className='logo-container'>
                <img 
                className="w-40"
                src={LOGO_URL}
                 />
            </div>
            <div >
                <ul className="flex p-4 m-4 gap-2">
                <li>Online Status: {onlineStatus ? "✅" :"🔴"}</li>
                    <li>
                    <Link to='/'> Home</Link>  
                    </li>
                    <li><Link to='/about'> About us</Link></li>
                    <li><Link to='/contact'> Contact</Link></li>
                    <li><Link to='/cart'> Cart ({cartItems.length} Items)</Link></li>
                    <li><Link to='/grocery'> Grocery</Link></li>
                    <button className='loginbutton' onClick={handleLogin}>{lgbtn}</button>
                    <li>{loggedUser.loggedInUser}</li>
                </ul>

            </div>

        </div>
    )
}

export default Header;
