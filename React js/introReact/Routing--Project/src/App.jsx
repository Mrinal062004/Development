import { useState } from 'react'
import {createBrowserRouter, RouterProvider}from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import DashBoard from './components/DashBoard.jsx'
import NavBar from './components/NavBar.jsx'
import ParamsComp from './components/ParamsComp.jsx'

import './App.css'
const router=createBrowserRouter(
  [
    {path:"/",
      element:<div><NavBar/>
      <Home/></div>,
    },
    {path:"/about",
      element:<div><NavBar/>
      <About/></div>,
    }
    ,
    {path:"/dashboard",
      element:<div><NavBar/>
      <DashBoard/></div>,
      children:[{},{},{}]
    },
    {
      path:"/student/:id",
      element:<div>
        <NavBar/>
        <ParamsComp/>
      </div>
    }
  ]
)

function App() {
  // const [count, setCount] = useState(0)

  return (<div>
    <RouterProvider router ={router}/>
    
    </div>
  )
}

export default App
