import React from 'react'
import { Route, Switch, useLocation } from "react-router-dom"

import Header from "../header/Header"
import Home from '../body/Home'
import Sidebar from "../body/left_section/sidebar/Sidebar"
import Signin from "../auth/Signin"
import Signup from "../auth/Signup"


function Router() {
    const { pathname } = useLocation()

    return (
        <>
            { pathname !== "/" && pathname !== "/auth/user/signup" &&  <Header />}
            <div className="d-flex">
                { pathname !== "/" && pathname !== "/auth/user/signup" &&  <Sidebar/>}
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route exact path="/" component={Signin}/>
                    <Route exact path="/auth/user/signup" component={Signup}/>
                </Switch>
            </div>
        </>
    )
}

export default Router
