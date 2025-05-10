import { useState } from "react";

const UserFun=(props)=>{

    const [count]=useState(0)
    return ( 
        <div className="user">
            <h1>User Detail</h1>
            <h2>{props.name}</h2>
            <h3>count : {count}</h3>
            <h3>Location : Hyderabad</h3>
            <h4>Email : sd@gmail.com</h4>
        </div>
    )
}

export default UserFun;