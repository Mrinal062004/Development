import { useState } from 'react'
import LoginBtn from './components/LoginBtn.jsx'
import LogoutBtn from './components/LogoutBtn.jsx'


import './App.css'

function App() {
  const[isLoggedIn,setLoggedIn]=useState(false);
  if(!isLoggedIn){
    return (
      <LoginBtn/>
    )
  }
 return (
  <div>
    <h1>Welcome to Happy Indices</h1>
    <div>
      {isLoggedIn && <LogoutBtn/>}
    </div>
  </div>
 )
}

export default App
