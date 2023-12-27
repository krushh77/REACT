import React from "react";
import { useParams } from "react-router-dom";

const Useparams = () => {
    const {age} = useParams()
    return(
        <div>Useparams - {age}</div>
    )
    }
    export default Useparams;
