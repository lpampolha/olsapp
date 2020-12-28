import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound'
import SignIn from './pages/SignIn/SignIn'


export default () => {
    return (
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/sobre'>
                <About />
            </Route>
            <Route exact path='/signin'>
                <SignIn />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
}