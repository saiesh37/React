import { useEffect, useState } from "react"
import { MENU_API_URL } from "./constants"

const UseMenu=(resId)=>{

const [resInfo,setResInfo]=useState(null)
     const fetchData=async ()=>{
      const data=await fetch(MENU_API_URL+ resId)  

      const json=await data.json()
      setResInfo(json)

    }
    useEffect(()=>{
        fetchData()
    },[])
    return resInfo;
}

export default UseMenu;