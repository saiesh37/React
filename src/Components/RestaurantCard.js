import { useContext } from "react";
import { CDN_URL } from "../../utils/constants";
import UserContext from "../../utils/UserContext";

const RestaurantCard = (props) => {
    
    const username= useContext(UserContext)
    console.log("res props",username)
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo , sla} = resData?.info;
  return (
    <div className="res-card">
      <img
        style={{ width: "100%", height: "150px" }}
        alt="food-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>
        <span>★ {avgRating} </span> &nbsp; Ratings
      </h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
      <h4>Logged in User : {username.loggedInUser}</h4>
    </div>
  );
};

//HOC

export const openRestaurant=(RestaurantCard)=>{
    return(props)=>{
        return(
        <div>
            <label className="absolute bg-black text-white  m-4 p-2 rounded-lg">Open</label>
            <RestaurantCard {...props}/>
            </div>
        )
    }
  }

export default RestaurantCard;