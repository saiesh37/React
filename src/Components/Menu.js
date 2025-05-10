import React, { useEffect,useState } from 'react';
import Shimmer from '../../Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API_URL } from '../../utils/constants';
import UseMenu from '../../utils/useMenu';
import RestaurantCategory from './RestaurantCategory';

const Menu=()=>{

     const [showIndex,setShowIndex]=useState(0)
   
    const {resId}=useParams();

    const resInfo= UseMenu(resId)
   
   if(resInfo===null )   return (<Shimmer/> )

    const {name,cuisines,costForTwoMessage}=resInfo.data.cards[2].card.card.info

    const {itemCards}=resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    const categories =resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>c.card.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
   
    console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    console.log("cat",categories)
   
 return (
        <div className="text-center ">
            <h1 className="font-bold my-6">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(" , ")}- {costForTwoMessage}</p>
            <h2 className="my-4 text-blue-500">Menu</h2> 
             <ul>           
                {categories.map((c,index)=>(
                    <li key={c?.card.card.title}>
                       <RestaurantCategory  categories={c?.card?.card} items={index===showIndex ? true : false}
                       setShowIndex={()=>(setShowIndex(index))}/>
                       </li>
                ))}
            </ul>           
        </div>

        
)
}
export default Menu;