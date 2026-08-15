import {useEffect,useState} from 'react'
const TimerComponent = () => {
    const [seconds,setSeconds]=useState(0);
    useEffect(()=>{
         const intervalId =setInterval(()=>{
            console.log("setInterval Started")
        setSeconds(prevSeconds=>prevSeconds+1);
    },1000);
    return()=>{
        console.log("time to stop")
       
        clearInterval(intervalId);
    };
},[]);
  return (
    <div>
        <h1>Seconss  :{seconds}</h1>
    </div>
  );
}

export default TimerComponent