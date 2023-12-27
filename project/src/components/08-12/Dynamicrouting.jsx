import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Dynamicrouting =()=>{
      const Router = useNavigate();
      const [ myAge, setmyage] = useState(25)


    return(
        <div>
        <h1>Dynamicrouting</h1>
        <button onClick={() => Router(`/use-params/${myAge}`)}>Routing</button>
        </div>
        
    )
}
export default Dynamicrouting;