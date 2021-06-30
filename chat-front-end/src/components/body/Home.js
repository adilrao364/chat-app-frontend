import React from 'react'
import "./Home.css"

import ChatList from "./left_section/ChatList"
import ChatUI from "./center_section/ChatUI"
import OtherUserProfile from "./right_section/OtherUserProfile"

function Home() {
    return (
        <>
            <div className="d-flex flex-fill">
                <div className="border-end p-4 scrollClass" style={{ width: "60%", height:"90vh", backgroundColor: "#F1F6FB", overflowY: "scroll" }}>
                    <ChatList/>
                </div>
                <div className="border-end p-4" style={{width:"100%", backgroundColor:"#F1F6FB"}}>
                    <ChatUI/>
                </div>
                <div className="p-4" style={{width:"60%", backgroundColor:"#F1F6FB"}}>
                    <OtherUserProfile/>
                </div>
            </div>
        </>
    )
}

export default Home
