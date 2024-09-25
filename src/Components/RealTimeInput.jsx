import React, { useState } from 'react'
import './RealTimeInput.css'

const RealTimeInput = () => {
    const[inputValue , setInputValue] = useState("");
    
    const handleChange = (e) =>{
        setInputValue (e.target.value);
    } 
  return (
    <div className='real-time'>
        <h1>Real -Time Input Display</h1>
        <input
        type='text'
        placeholder='Type something ..'
        value={inputValue}
        onChange={handleChange}/>
        <p>YOU TYPED : {inputValue}</p>
    </div>
  )
}

export default RealTimeInput