import React from 'react'
import { Route, Switch } from "react-router-dom"

import Header from "../header/Header"
import Home from '../body/Home'
import Sidebar from "../body/left_section/sidebar/Sidebar"


function Router() {
    return (
        <>
            <Header />
            <div className="d-flex">
                <Sidebar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </div>
        </>
    )
}

export default Router
