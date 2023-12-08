import { useState } from "react";

function Counter (){
    const [counter, setCounter] = useState(1);

    const [isloggedin, setCounterIn] = useState(false);
    

    function change(){
        setCounterIn ((prevvalue)=> !prevvalue);
    }

    function Increament() {
        // if (counter < 10)
{setCounter((prevvalue)=> prevvalue + 1)}
    }

    function Decrement (){
        setCounter((prevvalue) => prevvalue -1)
    }

    function test(){
        setCounter(counter + 1)
    }

    function Increamentby2(){
        setCounter ((prevvalue)=> prevvalue + 2) }

        
    return(
        <div>
            <h1>Counter - {counter} </h1>
            

        <button onClick={Increament}>+</button><br/>
        <button onClick={Decrement}>-</button><br/>
    
        <button onClick={test}>+</button><br/>
        <button onClick={Increamentby2}>+</button><br/>
        {isloggedin ? <button onClick={change}>logout</button> : <button onClick={change}>login</button>}

        </div>
      
    )
    
}
export default Counter;