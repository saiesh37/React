import { useEffect, useState } from "react";

const UseBody=()=>{

     const [list,setList]=useState([]);
        const [filterRestaurant,setfilterRestaurant]= useState([])
        
       const fetchData=async ()=>{
          const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")  
    
          const json=await data.json()
          console.log("jsond",json)
         
     setList(json.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants)
     setfilterRestaurant(json.data?.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    
        }
        useEffect(()=>{
            fetchData()
        },[])

        console.log("l",list)

    return [list,filterRestaurant]
}

export default UseBody