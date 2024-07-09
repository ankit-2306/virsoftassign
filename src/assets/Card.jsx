import React from 'react'
import { useState } from 'react';

const Card = ({name,vall,handleSubmit}) => {
    const [amt,setAmt]=useState(0);

    function handleButton(name,amt){
        let demo=Number(amt);
        
            handleSubmit(name,demo);
        
        setAmt(()=>{return 0;})
    }
  return (
    <div>
        <div className='bg-yellow-500 mx-3 yellowCard'>
            <section>

        <div>
            {name}
        </div>
        <div>
            ${vall}
        </div>
            </section>
        </div>
        <input className="mx-5 mt-2" type="number" placeholder='Qty' value={amt!==0?amt:''} onChange={(e)=>{setAmt(e.target.value);}}/>
        <button className="bg-blue-400 px-8 py-2 rounded-xl  " onClick={()=>{ handleButton(name,amt);}} >ADD</button>
    </div>
  )
}

export default Card