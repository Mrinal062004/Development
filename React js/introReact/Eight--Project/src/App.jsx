import  { useEffect } from 'react'
import {useState} from 'react'

import './App.css'
import ResizeComponent from './components/ResizeComponent.jsx'

function App() {
  // const [count,setCount]=useState(0);
  // const [total,setTotal]=useState(1)
  //first is side effect functio
  //second is cleanupp function
  //third is acomma separated dep list
  // useEffect(()=>{
  //   first
  //   return () =>{
  //   second
  //   }
  // }, [third])

  //runs on every render
  //Variation 1
  // useEffect(()=>{
  //   alert("I will run on each render")
  // })

  //variation :2
  //that runs on only first render
  // useEffect(() => {
  //   alert("tulli chai bana ");

  // },[])
  //variation 3
  // multiple update while updating value
  // useEffect(() => {
  //   alert("tulli chai bana ");

  // },[count])

  //variation 4
  // useEffect(()=>{
  //   alert("i run every time while count/total is updated")

  // },[total,count])

  //variation 5
  //lets add up clean function
  // useEffect(()=>{
  //   alert("count is new count")
  //   return()=>{
  //     alert("count is unmounted from uo")
  //   }
  // },[count])
  // function handleClick(){
  //   setCount(count+1);
    
  // }
  // function handleClickTotal(){
  //   setTotal(total+1);
    
  // }

  return (
    
      <ResizeComponent/>
      // {/* <TimerComponent/> */}
  
      // {/* <button onClick={handleClick}>DABA DE</button>
      // <br/>
      // Count is :{count}
      // <br/>
      // <button onClick={handleClickTotal}>DABA DE</button>
      // <br/>
      // Total is :{total}
      // <br/> */}

      
    
    )
}

export default App
