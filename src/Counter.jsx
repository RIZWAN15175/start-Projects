import React, { useState } from 'react'

const Counter = () => { 
  const [Counts,setCounts]=useState(0)  
  const handleClick = ()=>{
    setCounts(Counts+1)
  }
  return (
    <div>
      <button onClick={handleClick}>Increament</button>
    </div>
  )
}

export default Counter