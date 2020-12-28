import { SignInStyle } from './styled'
import { PageContainer, PageTitle } from '../../components/MainComponents'

const SignIn = () => {
    return (
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <SignInStyle>
                <form>
                    <label className="area">
                        <div className="area-title">E-mail</div>
                        <div className="area-input">
                            <input type="email" />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title">Senha</div>
                        <div className="area-input">
                            <input type="password" />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title">Lembrar senha</div>
                        <div className="area-input">
                            <input type="checkbox" />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title"></div>
                        <div className="area-input">
                            <button>Fazer Login</button>
                        </div>
                    </label>
                </form>
            </SignInStyle>
        </PageContainer>
    )
}

export default SignIn