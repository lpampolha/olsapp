import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import AdPage from './pages/AdPage'
import AddAd from './pages/AddAd'
import Ads from './pages/Ads'
import RouteHendler from './components/RouteHandler'
import Account from './pages/MyAccount'

export default () => {
    return (
        <Switch>
            <RouteHendler exact path='/'>
                <Home />
            </RouteHendler>
            <RouteHendler exact path='/sobre'>
                <About />
            </RouteHendler>
            <RouteHendler exact path='/signin'>
                <SignIn />
            </RouteHendler>
            <RouteHendler exact path='/signup'>
                <SignUp />
            </RouteHendler>
            <RouteHendler exact path='/my-account'>
                <Account />
            </RouteHendler>
            <RouteHendler exact path='/ad/:id'>
                <AdPage />
            </RouteHendler>
            <RouteHendler private exact path='/post-an-ad'>
                <AddAd />
            </RouteHendler>
            <RouteHendler exact path='/ads'>
                <Ads />
            </RouteHendler>
            <RouteHendler>
                <NotFound />
            </RouteHendler>
        </Switch>
    )
}