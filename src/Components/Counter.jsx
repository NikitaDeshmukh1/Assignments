import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const[count , setCount] = useState(0);

    const increment = () =>{
        setCount(count + 1);
    };
    const decrement = () =>{
        setCount (count - 1 );
    }
  return (
    <div className='counter-app'>
        <h1>Counter Application</h1>
        <h2>Count :{count}</h2>
        <button onClick={increment} >Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter