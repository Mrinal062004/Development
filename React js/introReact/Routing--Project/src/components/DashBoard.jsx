import React from 'react'
import {useNavigate} from 'react-router-dom'
const DashBoard = () => {
  const navigate =useNavigate();
  function handleClick(){
    navigate('/');
  }
  return (
    <div>
        DashBoard 
        <button onClick={handleClick}>Move to Home Page</button>
    </div>
  )
}

export default DashBoard