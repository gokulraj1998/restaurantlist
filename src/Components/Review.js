import React from 'react'
import {Col,NavItem,Row} from 'react-bootstrap'
function Review({data}) {
    
      

  return (
    <div>
        {data.map(item=> 
    (<div>
         <h6>{item.name}</h6>
         <p>{item.data}</p>
         <p>{item.comments}</p>
    </div>))}</div>
  )
}

export default Review