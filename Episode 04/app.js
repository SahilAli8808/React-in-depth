// importing react from node_module as React
import React from 'react'
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

 const data = [
    {
        "info": {
            "id": "231204",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "locality": "Hazratganj",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "avgRating": 4.3,
        },

    },
    {
        "info": {
            "id": "330433",
            "name": "McDonald's",
            "cloudinaryImageId": "ecd32b841549ce6bfd993260a2086c1f",
            "locality": "Hazratganj",
            "cuisines": [
                "American"
            ],
            "avgRating": 4.4,

        },

    },
    {
        "info": {
            "id": "405025",
            "name": "KFC",
            "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
            "locality": "Sahara Ganj Mall",
            "areaName": "Hazratganj",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            "avgRating": 4.3,

        }
    },
    {
        "info": {
            "id": "78862",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "092e58460657922e098a8afd5db838fe",
            "locality": "Khun Khunji Road",

        }
    },
    {
        "info": {
            "id": "165050",
            "name": "Mahalaxmi Sweets & Restaurant",
            "cloudinaryImageId": "oqk0mierg0rlhuxoa3ok",
            "locality": "Aliganj",

            "cuisines": [
                "Indian",
                "North Indian"
            ],
            "avgRating": 4.4,

        }
    },
    {
        "info": {
            "id": "63930",
            "name": "The Bon Bon Bakers",
            "cloudinaryImageId": "2c761e85049f81355f6bf864c97666dd",
            "locality": "Aliganj",
            "areaName": "Aliganj",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Desserts",
                "Pizzas",
                "Snacks",
                "Italian",
                "Beverages"
            ],
            "avgRating": 4.5,

        }
    },
    {
        "info": {
            "id": "76869",
            "name": "Radhey Lal Premium Sweets",
            "cloudinaryImageId": "bzupoiynxjbgogvumixa",
            "locality": "Chowk",
            "areaName": "Chowk",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Sweets",
                "Chinese",
                "North Indian",
                "Desserts"
            ],
            "avgRating": 4.5,

        }
    },
    {
        "info": {
            "id": "65084",
            "name": "Alamgir Hotel",
            "cloudinaryImageId": "ruczyhnam8hjwkkzgiwl",
            "locality": "Aminabad",
            "areaName": "Aminabad",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Mughlai"
            ],
            "avgRating": 4.3,

        }
    },
    {
        "info": {
            "id": "65085",
            "name": "Mughal Zaika Aminabad",
            "cloudinaryImageId": "yood4aumr1wbxed1odxk",
            "locality": "Aminabad",
            "areaName": "Aminabad",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Mughlai"
            ],
            "avgRating": 4.3,

        }
    },
    {
        "info": {
            "id": "76680",
            "name": "Aryan Family's Delight",
            "cloudinaryImageId": "vjx9rsdrpjpn4c1esict",
            "locality": "Chowk",
            "areaName": "Chowk",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "Thalis",
                "Chinese",
                "South Indian",
                "Snacks",
                "Pizzas",
                "Beverages"
            ],
            "avgRating": 4.5,

        }
    },
    {
        "info": {
            "id": "78815",
            "name": "Wow! Momo",
            "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
            "locality": "Chowk",
            "areaName": "Chowk",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Tibetan",
                "Healthy Food",
                "Asian",
                "Chinese",
                "Snacks",
                "Continental",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.2,

        }
    },
    {
        "info": {
            "id": "64648",
            "name": "Tunday Kababi (Kapoorthala)",
            "cloudinaryImageId": "4506603b1e57cdbd006a7d1585c5089d",
            "locality": "Aliganj",
            "areaName": "Aliganj",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Mughlai",
                "Kebabs",
                "Biryani",
                "Lucknowi"
            ],
            "avgRating": 4.4,

        }
    },
    {
        "info": {
            "id": "64649",
            "name": "Tunday Kababi (Aminabad)",
            "cloudinaryImageId": "64682ecce15228d05fd718f607ea3d14",
            "locality": "Aminabad",
            "areaName": "Aminabad",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Mughlai",
                "Kebabs",
                "Biryani",
                "Lucknowi"
            ],
            "avgRating": 4.4,

        }
    },
    {
        "info": {
            "id": "89361",
            "name": "La Pino'z Pizza",
            "cloudinaryImageId": "dek7ifvgfbnddngpqn4r",
            "locality": "Hazratganj",
            "areaName": "Hazratganj",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.2,

        }
    },
    {
        "info": {
            "id": "59654",
            "name": "Subway",
            "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
            "locality": "Hazratganj",
            "areaName": "Hazratganj",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Healthy Food",
                "Salads",
                "Snacks",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.3,

        }
    },
    {
        "info": {
            "id": "59514",
            "name": "Baskin Robbins - Ice Cream Desserts",
            "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
            "locality": "Sector B",
            "areaName": "Mahanagar",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Desserts"
            ],
            "avgRating": 4.5,

        }
    }
]




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

const Body = () => {
    return (
        <div className='body'>
            <div className='bodyhead-container'>
                <button className='filter'> Filter top rated search </button>
                <div className='search'>
                    <input type='text'></input>
                    <button className='search-button'>
                        search
                    </button>
                </div>
            </div>
            <div className='card-container'>
            {
                data.map(resturant =>  <RestCard resData={resturant}/> )
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

