import { useEffect, useState } from "react";



function Useeffect3 (){
    

const [counter, setCounter] =  useState(0);

const [Counter2, setCounter2] =  useState(10);


function increment(){
    setCounter ((prevvalue)=> prevvalue+1)
}
function increment2(){
    setCounter2 ((prevvalue)=> prevvalue+1)
}

useEffect (()=>{
    alert("hii from useeffect")
},[counter])

    return(
        <div>
            <h1>useeffect3</h1>
            <h1>counter: {counter}</h1>
            <button onClick={increment}>+</button>

            
            <h1>Counter2 : {Counter2}</h1>
            <button onClick={increment2}>+</button>
        </div>
    )
}
export default Useeffect3;