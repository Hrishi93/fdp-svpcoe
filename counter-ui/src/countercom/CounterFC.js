import React, { useState } from 'react'

export default function CounterFC() {

    const [count, setCount]=useState(10)
  return (
    <div>
      <p>{count}</p>
      <button onClick={ ()=> {setCount(count+1)}}>+</button>
      <button onClick={ ()=> {setCount(count-1)}}>-</button>
    </div>
  )
}
