import { useEffect, useState } from "react";

function UseEffect () {

    const [counter, setCounter] = useState(0);

    const [counter22, setCounter2] = useState(10);

    function increment(){
        setCounter((prevstate) => prevstate + 1)
    }


    function increment2(){
        setCounter2((prevstate) => prevstate + 1)
    }
    useEffect (() => {
    alert("hii from useeffect.")
});

    return (
        <div>
        <h1>useeffect</h1>
        <h1>counter: {counter}</h1>
        <button onClick={increment}>+</button>
        <h1>counter 22: {counter22}</h1>
        <button onClick={increment2}>+</button>
        </div>
    )
}
export default UseEffect;