import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'


export default () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/sobre'>
                <About />
            </Route>
        </Switch>
    )
}