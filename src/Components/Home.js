import React from 'react'
import {useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import Rcard from './Rcard'
import {listRestaurants} from './actions/rAction'
import {useDispatch,useSelector} from 'react-redux'
function Home() {
    // const [restaurants,setRestaurants] =useState([])
    // async function fetchData()
    // {
    //     await fetch('/rs.json')
    //     .then((res)=>res.json())
    //     .then((data)=>setRestaurants(data.restaurants))
    //     }
        
    
    const dispatch=useDispatch()
    const data=useSelector(state=>state.restaurantList)
     const {restaurant}=data
     console.log(restaurant)
    useEffect(()=>{dispatch(listRestaurants())},[])
    

  return (
    <Row>
    {restaurant.map((restaurant)=>(<Col sm={12} md={8} lg={6} xl={3}>
  <Rcard  item={restaurant}/></Col>))}
  </Row>
  )
}

export default Home