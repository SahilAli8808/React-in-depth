import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestCard from "./RestCard";
import { Link } from "react-router-dom";
const Body = () => {
    const [data, setdata] = useState([]);
    const [searchdata, setSearchdata] = useState("")
    const [filterdata, setfilterData] = useState([])


    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json()
        setdata(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        setfilterData(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    }

    return data.length === 0 ? (
        <Shimmer />
    ) : (
        <div className='body'>
            <div className='bodyhead-container'>
                <button className='filter' onClick={() => {
                    const filteredRestaurants = filterdata.filter((resturant) => {
                        return resturant.info.avgRating >= 4.5

                    })
                    setfilterData(filteredRestaurants)
                }}> Filter top rated search </button>
                <div className='search'>
                    <label htmlFor='search'>
                        Search : 
                    </label>
                    <input
                        type='text'
                        name='search'
                        value={searchdata}
                        onChange={(e) => {
                            const searchValue = e.target.value;
                            setSearchdata(searchValue);
                            console.log(searchValue)
                            const filterdata = data.filter((restaurant) => {
                                return restaurant.info.avgRating.toString().toLowerCase().includes(searchValue.toLowerCase()) 
                                || restaurant.info.name.toLowerCase().includes(searchValue.toLowerCase()) 
                                || restaurant.info.locality.toLowerCase().includes(searchValue.toLowerCase());
                            });
                            setfilterData(filterdata);
                        }}
                    />

                    {/* <button style={{ marginLeft: "5px" }} onClick={() => {
                        const filterdata = data.filter((restaurant) => {
                            return restaurant.info.name.toLowerCase().includes(searchdata.toLowerCase());
                        });
                        setfilterData(filterdata);
                    }}>Search</button> */}

                </div>
            </div>
            <div className='card-container' >
    {
        filterdata.length === 0 ? 
        (  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "70vh" , width:"1200px"}}>
            <h3 >Ooops! No restaurant Found</h3>
        </div>
            ): filterdata.map(restaurant => 
            <Link key={restaurant.info.id} to={"/restaurant/"+ restaurant.info.id}><RestCard resData={restaurant}/>  </Link> )
    }
</div>

        </div>
    )
}

export default Body;