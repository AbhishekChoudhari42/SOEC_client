
import Login from './pages/Login'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar';
import './styles/main.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState } from 'react';
const router = createBrowserRouter([
  {
    path: "/homepage",
    element:<HomePage/>
  },
  {
    path: "/login",
    element:<Login/>
  },
 
  
]);
import AuthContext from './AuthContext/authContext'
import React from 'react';
function App() {

  const [authstatus, setauthstatus] = useState(false);
  const login = (value) => {
    setauthstatus(value);
  };


  return (
    <React.Fragment >
      <div className="App">
      <AuthContext.Provider value={{ status: authstatus, login: login }}>
      <Navbar/>

      <RouterProvider router={router} />

      </AuthContext.Provider>
      </div>
    </React.Fragment>
       
  )
}

export default App
