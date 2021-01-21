import React from 'react'
import { Link } from 'react-router-dom'
import {AccountArea} from './styled'

const Account = () => {
    return (
        <>
        <AccountArea>
            <h1>
                Sobre 
            </h1>
            <Link to='/'>Minha Conta</Link>
        </AccountArea>
        </>
    )
}

export default Account