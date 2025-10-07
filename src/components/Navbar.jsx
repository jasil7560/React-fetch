import React from "react";

const Navbar=({setInp})=>{



    return(
        <div>
            <input type="text" onChange={(e)=>(setInp(e.target.value))} />
        </div>

    )
}
export default Navbar