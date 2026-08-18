import { useState ,useCallback } from 'react'
import ChildComponent from './components/ChildComponent.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  // function handleClick(){
  //   setCount(count+1);
  // }
  let handleClick=useCallback(()=>{
    setCount(count+1);
  },[count]);
 

  return (
    <>
      <div>
        <button onClick={handleClick}>Increment</button>
        <div>
          count : {count}
        </div>
        <br/>
        <br/>
        <div>
          <ChildComponent buttonName="Chua Na Mujhe 2 bar" handleClick={handleClick}/>
        </div>
      </div>

    </>
  )
}

export default App
