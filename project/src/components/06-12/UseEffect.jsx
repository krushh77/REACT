import { UseEffect } from "react";

function useeffect () {

    const [counter, setCounter] = useState(0);
    function increment(){
        setCounter((prevstate) => prevstate + 1)
    }
    UseEffect (() => {
    alert("hii from useeffect.")
});

    return (
        <div>UseEffect</div>
    )
}
export default UseEffect;