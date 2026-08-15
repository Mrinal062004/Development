// import Card from './components/Card.jsx'
import react ,{useState} from 'react'
import './App.css'

import Button from './components/Button.jsx'
function App() {
  const [count , setCount]=useState(0);
  function handClick(){
    setCount(count+1);
  }
  

  return (
    <div>
      
      <Button handClick={handClick} text="Click me">
        <h1>{count}</h1>
      </Button>
      
    </div>
      
  )
}

export default App
