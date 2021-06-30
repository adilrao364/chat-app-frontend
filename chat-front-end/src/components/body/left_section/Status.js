import React from 'react'

import Avatar from "../../images/adilgood.png"

function Status() {
    return (
        <>
            <div style={{width:"60px", marginTop:"1.5rem"}}>
                <img src={Avatar} alt="status" class="rounded-circle img-fluid img-thumbnail" style={{ objectFit: "cover", height: "60px", width: "60px" }} />
                <p style={{fontSize:"14px", color:"#8895A7", textAlign:"center"}}>Adil</p>
            </div>
        </>
    )
}

export default Status
