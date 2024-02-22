import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestCard from "./RestCard";
const Body = () => {
  
    const [data, setdata] = useState([])

    useEffect(()=>{
        fetchData();
       },[])   
  const fetchData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json  = await data.json()
    setdata(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
  }



    return data.length === 0? (
        <Shimmer/>
    ) :(
        <div className='body'>
            <div className='bodyhead-container'>
                <button className='filter' onClick={()=>{
                    const filteredRestaurants = data.filter((resturant)=>{
                    return resturant.info.avgRating >=4.5
                  
                })
                setdata(filteredRestaurants)
                }}> Filter top rated search </button>
                <div className='search'>
                    <label htmlFor='search'>
                        Search : 
                    </label>
                    <input type='text' name='search' value="" onChange={(e)=>{console.log(e.target.value)}}></input>
                </div>
            </div>
            <div className='card-container'>
            {
                data.map(resturant =>  <RestCard key={resturant.info.id} resData={resturant}/> )
            }
               
            </div>
        </div>
    )
}

export default Body;