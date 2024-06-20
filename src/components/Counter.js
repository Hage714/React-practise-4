import React, { useState } from 'react'
import { RiIndentIncrease } from "react-icons/ri";
import "../css/counter.css";

const Counter = () => {
    const [count, setCount] = useState(0)

    
    const increaseCount = () => {
        setCount(count + 1);
        console.log("Increasing counter");
    }

    const decreaseCount = () => {
        setCount(count - 1);
        console.log("Decreasing counter");
    }
    return (
        <div className='counter'>
            <div>
                <button onClick={decreaseCount} >Decrease count</button>
            </div>
            <div>
                <h3>{count}</h3>
            </div>
            <div>
                <button className='counter button' onClick={increaseCount}  > <RiIndentIncrease /> Increase count</button>
            </div>
        </div>
    )
}

export default Counter
