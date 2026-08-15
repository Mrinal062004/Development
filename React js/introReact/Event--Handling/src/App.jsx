import { useState } from 'react'

import './App.css'

function App() {
  function handleClick(){
    alert("I am About to kill you");
  }
  function handleMouseOver(){
    alert("Thari Bhains Mar jaye")
  }
  function handleInputChange(e){
    console.log("value till Now : ",e.target.value)

  }
  function handleSubmit(e){
    e.preventDefault()
    // iam writting default form
    alert("jma na kriya form tu")
  }
  

  return (
    <div className="mydiv">
      <button onClick={() => alert("Help to to find out error")}>Click Me</button>
      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button type="submit">submit</button>
      </form> */}
      {/* <p onMouseOver={handleMouseOver} style={{border:'2px solid black'}}>I am Super Star dont Hover over me</p>
      <button onClick={handleClick}
      >Click Me</button>
       */}
    </div>
    
    )
}

export default App
