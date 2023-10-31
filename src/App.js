import React from 'react'
import { useState } from 'react'

export default function App() {
  const [initial,setInitial] = useState(0)
  function handleSubmit(){
  setInitial(initial+1)
  }
  function handleSubmitB(){
    setInitial(initial-1)
    console.log('clicked1')
   }

  return (
    <div>
      <button onClick={handleSubmit}>+</button>
      <span>{initial}</span>
      <button onClick={handleSubmitB}>-</button>
    </div>
  )
}

