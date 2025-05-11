import { useEffect, useState } from "react";
import { CDN_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../../utils/CartSlice";

const RestaurantCategory =(props)=>{
    console.log("p",props)
    const {items,setShowIndex}=props
    const {categories}=props
   
    const handleClick=()=>{
        setShowIndex()
    }
    const handleItemClick = (itemId) => {
        window.open(`/item/${itemId}`, '_blank');
    };

    const dispatch=useDispatch()
    const handleAddItem=(item)=>{
        dispatch(addItems(item))
    }

    return(
        <div className="w-6/12 bg-gray-50 mx-auto my-4 shadow-lg p-4" >
                <div className="flex justify-between " >
                <span className="font-bold text-lg">{categories.title} ({categories.itemCards.length}) </span>
                <span className="cursor-pointer" onClick={handleClick} >🔽</span>
                </div> 
              { items? (<div >
                   { categories.itemCards.map((i)=>( 
                    <div 
                        className="p-4 my-2 border-gray-200 border-b-2 text-left cursor-pointer" 
                        // onClick={() => handleItemClick(i.card.info.id)}
                        key={i.card.info.id}
                    >
                        <div className="py-2 font-bold ">
                            <div className="flex justify-between">
                                <img src={CDN_URL + i.card.info.imageId} className="h-15 w-20"/> 
                                <button className="text-red-400 border-black" onClick={()=>handleAddItem(i)}>Add</button>
                            </div>
                            <span>{i.card?.info?.name}</span>
                            <span>- </span>
                            <span>₹{(i.card?.info?.price/100) || (i.card?.info?.defaultPrice/100)}</span>
                        </div>
                        <p>{i.card?.info?.description}</p>
                    </div>
                   ))}
                </div>) : <></>
}
            </div>              
    )
}
export default RestaurantCategory;