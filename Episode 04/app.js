// importing react from node_module as React
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'





const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img className="logo-img" src='https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png' />
            </div>
            <div className='items'>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Offers
                    </li>
                    <li>
                        Sign
                    </li>
                    <li>
                        Cart
                    </li>
                </ul>
            </div>
        </div>
    )
}

//  const data = 



const RestCard = ({resData}) => {
 const {name , avgRating, locality, cloudinaryImageId}= resData.info;

    return (
        <div className='rest-card'>
            <div className='restcard-img'>
                <img className= "restcard-img1" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}/>
            </div>
            <div className='food-name'>
                <h3>{name}</h3>
            </div>
            <div className='rating'>
                <h4>
                    {avgRating} rating
                </h4>
            </div>
            <div className='address'>
                <p>
               { locality}
                </p>
            </div>
        </div>
    )
}



const Shimmer = ()=>{
    return  (
        <div className='shimmer-container'>
            <div className='shimmer-card'>
               
            </div>
            <div className='shimmer-card'>
               
            </div>
            <div className='shimmer-card'>
                
            </div>
            <div className='shimmer-card'> </div>
            <div className='shimmer-card'> </div>
            <div className='shimmer-card'> </div>
            <div className='shimmer-card'> </div>
        </div>
    )
}

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

const Footer = () => {
    return (
        <div className='footer'>
            this is footer
        </div>
    )
}

const App = () => {
    return (
        <div>

            <Header />
            <Body />
            {/* <Footer/> */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)

