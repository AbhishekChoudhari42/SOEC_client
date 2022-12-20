import React from 'react'
import { Link } from "react-router-dom";
const FeedElement = ({data}) => {
  return (

    <div className="feedElement">
        <h1>{data.activityName}</h1>
        
        <Link to='/activitypage'>
        <button>Register</button>
        </Link>
    </div>
  )
}

export default FeedElement