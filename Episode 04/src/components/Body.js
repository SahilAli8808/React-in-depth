import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestCard from "./RestCard";
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
                    const filteredRestaurants = data.filter((resturant) => {
                        return resturant.info.avgRating >= 4.5

                    })
                    setdata(filteredRestaurants)
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
                                return restaurant.info.name.toLowerCase().includes(searchValue.toLowerCase());
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
            <div className='card-container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
    {
        filterdata.length === 0 ? <h3 style={{ margin: '0' }}>Ooops! No restaurant Found</h3> : filterdata.map(restaurant => <RestCard key={restaurant.info.id} resData={restaurant} />)
    }
</div>

        </div>
    )
}

export default Body;