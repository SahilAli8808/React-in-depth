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

   export default RestCard;