import React, { useContext, useEffect, useState } from 'react';
import RestaurantCard, { openRestaurant } from './RestaurantCard';
import Shimmer from '../../Shimmer';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import UseBody from '../../utils/useBody';
import useOnlineStatus from '../../utils/useOnlineStatus';
import UserContext from '../../utils/UserContext';
// import resList from '../../utils/mockData';
const Body=()=>{
    // const [list,setList]=useState([]);
    const [filteredRestaurant,setfilteredRestaurant]= useState([])
    
    const [searchText,setSearchText]=useState("")
    const {loggedInUser,setUserName}= useContext(UserContext)
    // console.log("filteredRestaurant",userDetails)

    const [list,filterRestaurant]=UseBody();

    const OpenRes=openRestaurant(RestaurantCard)
    
    useEffect(() => {
        setfilteredRestaurant(filterRestaurant);
    }, [filterRestaurant]);

    const onlineStatus=useOnlineStatus();
    const handleTopRated=()=>{
       let newList= list.filter( item => item.info.avgRating> 4.3)
       setfilteredRestaurant(newList)
        // resList=[...toprated];
    }

    const handleSearch=()=>{
      console.log(searchText)
      let newRes=list.filter((item) => item.info.name.toLowerCase().includes(searchText.toLowerCase()))
      setfilteredRestaurant(newRes)
      
    }

    // useEffect( ()=>  {
    //   fetchData();
    // },[])

    // const fetchData= async ()=>{
    //  const data= await 
    //  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    //  const jsondata= await data.json();
    //  setList(jsondata.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    //  setfilteredRestaurant(jsondata.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants)
   
    // }
  
    if(onlineStatus===false){
      return (<h1>No Internet</h1>)
    }
    return list.length===0 ? <Shimmer/> :  (
        <div className='body'>
          <div className='filter'>
              <div className=" m-4 p-4">
                <input type='text' placeholder='Search Restaurants' className="border-r-2 p-1" value={searchText} 
                onChange={(e)=>{setSearchText(e.target.value)}} />
                <button onClick={handleSearch}>Search</button>
              </div>  
              <button className='filter-res' onClick={handleTopRated}>Top Rated Restaurants</button>
              <div>
          <input className='border to-black' onChange={(e)=>setUserName(e.target.value)}/>
         </div>
          </div>
        
          <div className='res-container'>
            {
                filteredRestaurant.map(res=> 
                <Link key={res.info.id} to={"/restaurant/"+ res.info.id}>
                  
                  {res.info.isOpen ? <OpenRes resData={res}/>:<RestaurantCard resData={res}/>}
                </Link>)
            }
          </div>
        </div>
    )
}

export default Body;
