import React from 'react'
import UserClass from './Components/UserClass'
import UserFun from './Components/UserFun';
import { Component } from 'react';
import UserContext from '../utils/UserContext';



class About extends Component{

    constructor(props){
        super(props)
        console.log("parent const called")
    }

    componentDidMount(){
        console.log("parent did mount")
    }

    render(){
        console.log("parent render called")
        return(
            <div>
                <h1>This is about page</h1>
                {/* <UserFun name="saiesh from function" /> */}
            <div>
                <UserContext.Consumer>
                    {(data)=><h1>{data.loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
                <UserClass name={"saiesh from class"} location={"hyd"}/>
    
            </div>
        )
    }
}
// const About=()=>{
//     return(
//         <div>
//             <h1>This is about page</h1>
//             {/* <UserFun name="saiesh from function" /> */}
//             <UserClass name={"saiesh from class"} location={"hyd"}/>

//         </div>
//     )
// }
export default About;