import React from 'react';

class UserClass extends React.Component{

    constructor(props){
        super(props)
    console.log("child const called")
        this.state={
            count : 0,
            userInfo:{
                name:'Hi',
                locaton:'cdm',
                image:"default"
            }
        }

    }

      addcount(){
        this.setState((prevState) => ({
            count: prevState.count + 1
        }));
    }

    async componentDidMount(){
        console.log("child did mount")

        const data=await fetch("https://api.github.com/users/saiesh37")
        const json=await data.json();
        console.log("json",json)
        this.setState({
            userInfo: json
        })
    }


    render(){
        console.log("child render called")
        const {login,location}=this.state.userInfo;
        return (
            <div className='user'>
            <h1>User Details</h1>
            <div style={{display: 'flex'}} >
            <h2>Count : {this.state.count}</h2>
            <button onClick={() => {
                this.setState({
                    count : this.state.count + 1
                })
            }}>+</button>
            </div>
            <h2>Name : {login} </h2>
            <h3>Location : {location}</h3>
            </div>
        )
    }
}

export default UserClass