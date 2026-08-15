import UserCard from  './components/UserCard' 
import "./App.css"
import first from './assets/first.png'
import second from './assets/second.png'
import third from './assets/third.png'
function App(){
  return (
    <div className="container">
      <UserCard name="Kamal Singh" desc="This side Kamal Singh Junior Develor" img={first} />
      <UserCard name="Ustad Bismillah" desc="This side Ustad Bismillah Terrorist but now became a good human being" img={second} />
      <UserCard name="Mrinal Tiwari" desc="This side Mrinal Tiwari SDE-2" img={third} />
    </div>
  )

}
export default App
