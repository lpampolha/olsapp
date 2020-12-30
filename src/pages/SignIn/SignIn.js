import React, { useState } from 'react'
import { SignInStyle } from './styled'
import ConnectAPI from '../../helpers/ConnectAPI'
import { doLogin } from '../../helpers/AuthHendler'
import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents'

const SignIn = () => {

    const api = ConnectAPI()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberPassword, setRemeberPassword] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        setDisabled(true)
        setError('')

        const json = await api.login(email, password)

        if(json.error){
            setError(json.error)
        }else{
            doLogin(json.token, rememberPassword)
            //doLogin(json.token)
            window.location.href = "/"
        }
        setDisabled(false)
    }

    return (
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <SignInStyle>

                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }

                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area-title">E-mail</div>
                        <div className="area-input">
                            <input type="email" disabled={disabled} value={email} onChange={e=>setEmail(e.target.value)} required />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title">Senha</div>
                        <div className="area-input">
                            <input type="password" disabled={disabled} value={password} onChange={e=>setPassword(e.target.value)} required />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title">Lembrar senha</div>
                        <div className="area-input">
                            <input type="checkbox" disabled={disabled} checked={rememberPassword} onChange={()=>setRemeberPassword(!rememberPassword)} />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title"></div>
                        <div className="area-input">
                            <button disabled={disabled}>Fazer Login</button>
                        </div>
                    </label>
                </form>
            </SignInStyle>
        </PageContainer>
    )
}

export default SignIn