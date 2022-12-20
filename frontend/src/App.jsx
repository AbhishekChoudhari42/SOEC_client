
import Login from './pages/Login'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar';
import './styles/main.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/homepage",
    element:<HomePage/>
  },
  {
    path: "/login",
    element:<Login/>
  },
  {
    path: "/activity",
    element:<HomePage/>
  }
  
]);

function App() {

  return (
    <div className="App">
      <Navbar/>
      <RouterProvider router={router} />
      
    </div>
  )
}

export default App
