import { Link } from 'react-router-dom'
import { HeaderStyled } from './styled'

import { isLogged, doLogout } from '../../../helpers/AuthHendler'

const Header = () => {

    let logged = isLogged()

    const handleLogout = () => {
        doLogout()
        window.location.href='/'
    }

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
                                    <button onClick={handleLogout}>Sair</button>
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