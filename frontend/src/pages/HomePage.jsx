import React from 'react'
import Feed from '../components/Feed'
import '../styles/homepage.css'
import '../styles/App.css'
import { useContext , useState} from 'react'
import MyReg from '../components/MyReg'

import authContext from '../AuthContext/authContext'

const HomePage = () => {
  const auth = useContext(authContext);
  auth.login(localStorage.getItem('lstatus'))
  console.log(auth)
 
  const [regstate,setRegstate] = useState(false)
  const [registration , setRegistration] = useState([]);

  // auth.status?console.log("auth success"):window.location.href = '/login'
  return (
    auth.status && (<div className="homepage">
        <div className="sDetails">

        </div>
        <div className="feed">
          {auth.status && <Feed registration = {registration} regstate = {regstate} setRegstate = {setRegstate}/>}  
        </div>
        

        <div className="myReg">
            <MyReg setRegistration={setRegistration} registration = {registration} regstate = {regstate}/>
        </div>
        

    </div>)
  )
}

export default HomePage