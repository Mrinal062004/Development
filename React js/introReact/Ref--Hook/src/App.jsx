import { useState,useEffect,useRef} from 'react'

import './App.css'

function App() {
  const [time, setTime] = useState(0);
  let timerRef=useRef(null);
  function startTimer(){
    timerRef.current=setInterval(()=>{
      setTime(time=>time+1);

    },1000);

    

  }
  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current=null

    
  }
  function resetTimer(){
    stopTimer();
    setTime(0);
    
  }

  // let val=useRef(1);
  // let btnRef=useRef();
  // function handleClick(){
  //   setCount(count+1);

  //   val.current=val.current+1
  //   console.log("Value of val is" ,val.current);
  // }
  // function changeColor(){
  //   btnRef.current.style.backgroundColor="red";
    
  // }
  // //it runs on every click
  // useEffect(()=>{
  //   console.log("I love my India")


  // })

  return (
    <div>
      <h1>StopWatch : {time}  seconds</h1>
      {/* <p>Count : {count}</p>
    <button  ref={btnRef} onClick={handleClick}>Increment</button>
    <br/> 
    <br/>
    <button onClick={changeColor}>Change color of btn</button> */}
    <button onClick={startTimer}>Start</button>
    <br/>
    <br/>
    <button onClick={stopTimer}>Stop</button>
     <br/>
     <br/>
    <button onClick={resetTimer}>Reset</button>

 
    </div>
      
  )
}

export default App
