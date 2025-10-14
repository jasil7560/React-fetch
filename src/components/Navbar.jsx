import React from "react";
import "./Navbar.css";

const Navbar=({setInp})=>{



    return(
        <div className="div1">
            <div className="div2">
            <input className="inp" type="text" onChange={(e)=>(setInp(e.target.value))} />
            </div>
        </div>

    )
}
export default Navbar