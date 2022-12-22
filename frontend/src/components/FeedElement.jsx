import React from 'react'
import { Link } from "react-router-dom";
import axios from "axios";
const FeedElement = ({data,props}) => {

    let date = new Date(data.createdAt)
    
    const handleRegistration = async (e) =>{
        e.preventDefault();
        const register = (confirm("Do you want to register for "+ e.target.name+" activity ?"));
        let studentData = {
            id : "63a2a17a0fd4f12592a505e1",

            activityId : e.target.id
        };
        const ACTIVITY = e.target.name

        if(!props.registration.includes(ACTIVITY)){
            const URL = "http://localhost:5000/student/activity/register/"+ACTIVITY; 
            try{
                await axios.put(URL,studentData).then(res => {
                    console.log(res.data);
                    console.log(res.status);
                    
                
            })
                props.setRegstate(!props.regstate)
            }catch(error){
    
            }
        }else{
            alert("you have already registered in "+ACTIVITY+" activity")
        }// console.log("sds")

        
        
}

  return (
    
    <div className="feedElement">
        <h2>{data.activityName}</h2>
        
        <p>
            weqw qfqwq gnkl j2bjb2jbej ajfsaj fjdf jsdhf jdsfs hfdsh jdfsd jsdf dsgdsgsdg sdsdg dsf dfdsg sd sdgs dgsdsd 

        </p>
        <h6>{date.toLocaleDateString()}</h6>
        <button name = {data.activityName} id = {data._id} onClick={handleRegistration}>Register</button>
    </div>
  )
}

export default FeedElement