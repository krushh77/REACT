import toast from "react-hot-toast";
import Navbar from "./Navbar";
import { useContext } from "react";
import { Mycontext } from "../Context/Authcontext";




function Home() {
    const {state, dispatch}= useContext(Mycontext);
    return (
        <div>
            {/* <Navbar /> */}
            <h1>Home Page -{state.test}</h1>
            <button onClick={()=> toast.success("succes")}>succes</button><br/>
            <button onClick={()=> toast.error("error")}>error</button>
        </div>
    )
}

export default Home;