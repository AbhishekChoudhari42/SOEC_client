import React from 'react'
import { useState,useEffect } from 'react'
import FeedElement from './FeedElement'
import axios from 'axios'
import '../styles/feed.css'
const Feed = () => {

const [feed,setFeed] = useState([])
const [error,setError] = useState(false)
    const getFeed = async () =>
    {

        let feedData
        await axios.get("http://localhost:5000/admin/activity/all").then(res => {
            feedData = res.data
        })
        setFeed(feedData)
        setError(true)

    }

    useEffect(() => {
      getFeed()  
    }, [])
    
  return (
    <div>

    
        
    {feed && feed.map((data) => {

            return <FeedElement data = {data} key={data._id}/>
    
    })}

        
    </div>
  )
}

export default Feed