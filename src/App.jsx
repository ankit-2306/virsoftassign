import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/Card'

function App() {
  const [btc,setBtc]=useState(0);
  const [doge,setDoge]=useState(0);
  const [rip,setRip]=useState(0);
  const [total,setTotal]=useState(0);
  const [btcamt,setBtcamt]=useState(0.0);
  const [dogeamt,setDogeamt]=useState(0.0);
  const [ripamt,setRipamt]=useState(0.0);
 
  function handleSubmitt(name,amt){
    console.log(name,amt);
    let prevTotal=total;
    if(name=='BTC'){
      let demo=(btc+amt)*25000;
      let demo2=demo.toFixed(2);
      setBtc((prev)=>prev+amt);
      setBtcamt(()=>{ return demo2;});
      prevTotal+=Number(demo2);
    }
    else if(name=='DOGE'){
      let demo=(doge+amt)*0.75;
      let demo2=demo.toFixed(2);
      setDoge((prev)=>prev+amt);
      setDogeamt(()=>demo2);
      prevTotal+=Number(demo2);
      
      
    }
    else{
      let demo=(rip+amt)*1.5;
      let demo2=demo.toFixed(2);
      setRip((prev)=>prev+amt);
      setRipamt(()=>demo2);
      prevTotal+=Number(demo2);
    }
    setTotal(()=>prevTotal);
    console.log(prevTotal);
  }

  return (
    <>
      <div className='flex justify-around mt-4'>
      <Card name="BTC" vall={25000} handleSubmit={handleSubmitt}/>
      <Card name="DOGE" vall={0.75} handleSubmit={handleSubmitt}/>
      <Card name="RIPPLE" vall={1.15} handleSubmit={handleSubmitt}/>
      </div>
      <div className='text-center mt-20'>
        MY CART
      </div>
      <div className="flex justify-around">
        <span>COIN</span>
        <span>QNT.</span>
        <span>AMOUNT</span>
      </div>
        
        <div className="flex justify-around ">
          <span>BTC</span>
          <span>{btc}</span>
          <span>{btcamt}</span>
        </div>
      
      
        <div className=" flex justify-around">
          <span>DOGE</span>
          <span>{doge}</span>
          <span>{dogeamt}</span>
        </div>
      
        <div className='flex justify-around'>
          <span>RIPPLE</span>
          <span>{rip}</span>
          <span>{ripamt}</span>
        </div>
      
          
      <div className='text-right mr-10'>
        Total:{total}
      </div>
        
    </>
  )
}

export default App
