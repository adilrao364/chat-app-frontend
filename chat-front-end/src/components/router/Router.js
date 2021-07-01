import React from 'react'
import { Route, Switch } from "react-router-dom"

import Header from "../header/Header"
import Home from '../body/Home'
import Sidebar from "../body/left_section/sidebar/Sidebar"
import Signin from "../auth/Signin"
import Signup from "../auth/Signup"
import Setting from "../body/left_section/Setting"


function Router() {
    return (
        <>
            <Header />
            <div className="d-flex">
                <Sidebar/>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route exact path="/" component={Signin}/>
                    <Route exact path="/auth/user/signup" component={Signup}/>
                    <Route exact path="/user/account/setting" component={Setting}/>
                </Switch>
            </div>
        </>
    )
}

export default Router
