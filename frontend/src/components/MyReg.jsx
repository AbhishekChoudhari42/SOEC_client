import React from 'react'
import axios from 'axios'
import {useState , useEffect } from 'react'
const MyReg = ({regstate,setRegistration,registration}) => {

    // const [registration , setRegistration] = useState([]);
    const getMyRegistrations = async () =>{
        let reg = []
        const studentID = "63a2a17a0fd4f12592a505e1"

        await axios.get("http://localhost:5000/student/activity/myregistrations/"+studentID).then(res => {
            reg =  res.data 
        })

        setRegistration(reg);
    }

    useEffect(() => {
      getMyRegistrations();
    }, [])

    useEffect(() => {
        getMyRegistrations();
      }, [regstate])
    



  return (
    // console.log(registration)
    <div>
        <h1>My registrations</h1>
        
        {registration && (registration.map(regdata=>{
            
            return <div>
                <h3>{regdata}</h3>
            </div>
        }))
        
        }
    </div>
  )
}

export default MyReg