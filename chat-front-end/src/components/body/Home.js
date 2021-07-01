import React from 'react'
import "./Home.css"

import {Switch, Route} from "react-router-dom"

import ChatList from "./left_section/ChatList"
import Groups from "../body/left_section/sidebar/Groups"
import Contacts from "../body/left_section/sidebar/Contacts"
import MyProfile from "../body/left_section/sidebar/MyProfile"

import ChatUI from "./center_section/ChatUI"
import OtherUserProfile from "./right_section/OtherUserProfile"

function Home() {
    return (
        <>
            <div className="d-flex flex-fill">
                <div className="border-end p-4 scrollClass" style={{ width: "60%", height: "90vh", backgroundColor: "#F1F6FB"}}>
                    <Switch>
                        <Route exact path="/home" component={ChatList}/>
                        <Route path="/home/user/groups" component={Groups}/>
                        <Route path="/home/user/contacts" component={Contacts}/>
                        <Route path="/home/user/my-profile" component={MyProfile}/>
                    </Switch>
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
