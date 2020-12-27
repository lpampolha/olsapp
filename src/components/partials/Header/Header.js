import { Link } from 'react-router-dom'
import { HeaderStyled } from './styled'

const Header = () => {
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
                        <li>
                            <Link to="">Login</Link>
                        </li>
                        <li>
                            <Link to="">Cadastrar</Link>
                        </li>
                        <li>
                            <Link to="" className="button">Anuncie Aqui!</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </HeaderStyled>
    )
}

export default Header