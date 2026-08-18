import { useDispatch ,useSelector } from 'react-redux'
import {decrement,increment,reset,incrementByAmount} from './features/counterSlice.jsx';
import React ,{useState} from 'react'

import './App.css'

function App() {
  const [amount,setAmount]=useState(0)
  const count=useSelector((state) => state.counter.value);
  const dispatch =useDispatch();
  function handleIncrementClick(){
    dispatch(increment());

  }
  function handleDecrementClick(){
     dispatch(decrement());
    
  }
   function handleResetClick(){
     dispatch(reset());
    
  }
  function handleAmountClick(){
    dispatch(incrementByAmount(amount));
  }
  return (
    <>
    <div className="container">
      <button onClick={handleIncrementClick}>+</button>
      <p>Count : {count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <br/>
      <br/>
      <button onClick={handleResetClick}>Reset</button>

      <input type='Number' value={amount} placeholder="Enter the starting count"  onChange={(e)=>setAmount(e.target.value)}/>
      <br/>
      <br/>
      <button onClick={handleAmountClick}>Increment by amount</button>
    </div>
    </>
    
       )
}

export default App
