import { useEffect, useState } from "react";

function Useeffect4(){
 const [counter, setCounter] = useState(0);
 const [counter2, setCounter2] = useState(10);

 function increment(){ 
    setCounter((prevvalue)=> prevvalue+1)
 }
 function increment2(){ 
    setCounter2((prevvalue)=> prevvalue+1)
 }
 useEffect (()=>{
    alert("hii from useeffect4")
 }, [counter, counter2])




    return(
        <div>
            <h1>Useeffect4</h1>
            <h1>counter : {counter2}</h1>
            <button onClick={increment}>+</button>
            <h1>counter2 : {counter2}</h1>
            <button onClick={increment2}>+</button>
        </div>
    )
}
export default Useeffect4;