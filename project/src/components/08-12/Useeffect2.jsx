import { useEffect, useState } from "react";

function Useeffect2 (){
    const [counter, setCounter] = useState(0);
function increment () {setCounter ((prevvalue)=> prevvalue+1)
}

useEffect (()=>{
    alert("alert from use effect")
}, [])

    return (
        <div>
            <h1>Useeffect 2</h1>
            <h1>counter: {counter}</h1>
            <button onClick={increment}> + </button>
        </div>
    )
}
export default Useeffect2;