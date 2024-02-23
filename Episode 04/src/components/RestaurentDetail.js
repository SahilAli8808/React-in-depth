import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function RestaurentDetail() {

 const {resId} = useParams();

 useEffect (()=>{
    // console.log("screen")
    fetchInfo();

 },[])

 const fetchInfo = async ()=>{
        // const response = await fetch("")
        console.log("hello")
        // console.log(response);
 }


  return (
    <div>
    <h1>This is restaurant details</h1>
      <p></p>
    </div>
  )
}

export default RestaurentDetail
