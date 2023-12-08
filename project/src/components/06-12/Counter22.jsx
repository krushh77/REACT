import { useState } from "react";

function Counter2 (){

    const [Counter, setCounter]= useState(100);
    console.log(Counter, "Counter")

    function Increment(){
        setCounter((prevstate)=> prevstate + 1)
    }
    function decrement(){
        setCounter((prevstate)=> prevstate - 1)
    }
    function Reset(){
        setCounter(100)
    }


    return (
          <div>
            <h1>Counter2 :{Counter}</h1>
            <button onClick={Increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={Reset}>Reset</button>
            </div>
          
    )
}
export default Counter2;