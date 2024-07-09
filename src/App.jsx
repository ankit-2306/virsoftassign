import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/Card'

function App() {
  const [btcval, setBtcval] = useState(0);
  const [dogeval, setDogeval] = useState(0);
  const [ripval, setRipval] = useState(0);
  const [total,setTotal]=useState(0);

  function handleSubmitt(name,amt){
    if(name=='BTC'){
      setBtcval(()=>{return btcval+amt;});
    }
    else if(name=='DOGE'){
      setDogeval(()=>{return dogeval+amt;});
    }
    else if(name=='RIPPLE'){
      setRipval(()=>{return ripval+amt;})
    }

    setTotal(()=>(btcval+dogeval+ripval));
  }

  return (
    <>
      <div className='flex justify-around mt-4'>
      <Card name="BTC" vall={25000} handleSubmit={handleSubmitt}/>
      <Card name="DOGE" vall={0.75} handleSubmit={handleSubmitt}/>
      <Card name="RIPPLE" vall={1.15} handleSubmit={handleSubmitt}/>
      </div>
      <div className='text-center mt-5'>
        MY CART
      </div>
          <span>COIN</span>
          <span>QTY</span>
          <span>AMOUNT</span>
      <div>
      <div>
        {/* {btcval && } */}
        
      </div>
      <div>

      </div>
      <div>

      </div>
        Total:{total}
      </div>
        
    </>
  )
}

export default App
