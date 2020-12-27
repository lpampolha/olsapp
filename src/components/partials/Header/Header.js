import { Link } from 'react-router-dom'
import { HeaderStyled } from './styled'

import { isLogged } from '../../../helpers/AuthHendler'

const Header = () => {

    let logged = isLogged()

    return (
        <HeaderStyled>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <span className="logo-1">O</span>
                        <span className="logo-2">L</span>
                        <span className="logo-3">S</span>
                    </Link>
                </div>

                <nav>
                    <ul>
                        {logged &&
                            <>
                                <li>
                                    <Link to="/my-account">Minha Conta</Link>
                                </li>
                                <li>
                                    <Link to="/logout">Sair</Link>
                                </li>                            
                                <li>
                                    <Link to="/post-an-ad" className="button">Anuncie Aqui!</Link>
                                </li>
                            </>
                        }

                        {!logged &&
                            <>
                                <li>
                                    <Link to="/signin">Login</Link>
                                </li>
                                <li>
                                    <Link to="/signup">Cadastrar</Link>
                                </li>
                                <li>
                                    <Link to="/signin" className="button">Anuncie Aqui!</Link>
                                </li>

                            </>
                        }
                    </ul>
                </nav>
            </div>
        </HeaderStyled>
    )
}

export default Header