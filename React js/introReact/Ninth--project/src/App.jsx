import { createContext,useState } from 'react'
import ChildA from './components/ChildA.jsx'

import './App.css'
//step1: create Context
const ThemeContext=createContext();
//step2 :wrap all the children inside a provider
//step 3 : pass the value
//step 4 consumer ka andar jake consume kr lo



function App() {
  // const [user, setUser]=useState({name:"Love"})
  const[theme ,setTheme]=useState('light')
  

  return (
    <>
    <ThemeContext.Provider value={{theme ,setTheme}}>
      <div id="container" style={{backgroundColor:theme==='light'? "beige":"black"}}>
        <ChildA/>
      </div>
    </ThemeContext.Provider>
    
    
    </>
    )
}

export default App
// export {UserContext}
export {ThemeContext}