import React, { useState, useEffect } from 'react'
import { SignUpStyle } from './styled'
import ConnectAPI from '../../helpers/ConnectAPI'
import { doLogin } from '../../helpers/AuthHendler'
import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents'

const SignUp = () => {

    const api = ConnectAPI()

    const [name, setName] = useState('')
    const [stateLoc, setStateLoc] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [stateList, setStateList] = useState([])
    const [disabled, setDisabled] = useState(false)
    const [error, setError] = useState('')

    useEffect(()=>{
        const getStates = async () => {
            const slist = await api.getStates()
            setStateList(slist)
        }
        getStates()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setDisabled(true)
        setError('')

        if(password !== confirmPassword){
            setError('Senhas não são iguais')
            return
        }

        const json = await api.register(name, email, password, stateLoc)

        if(json.error){
            setError(json.error)
        }else{
            doLogin(json.token)
            window.location.href = "/"
        }
        setDisabled(false)
    }

    return (
        <PageContainer>
            <PageTitle>Cadastro</PageTitle>
            <SignUpStyle>

                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }

                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area-title">Nome Completo</div>
                        <div className="area-input">
                            <input type="text" disabled={disabled} value={name} onChange={e=>setName(e.target.value)} required />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title">Estado</div>
                        <div className="area-input">
                            <select value={stateLoc} onChange={e=>setStateLoc(e.target.value)} required>
                                <option></option>
                                {stateList.map((i,k)=>
                                    <option key={k} value={i._id}>{i.name}</option>
                                )}
                            </select>
                        </div>
                    </label>

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
                        <div className="area-title">Confirme a senha</div>
                        <div className="area-input">
                            <input type="password" disabled={disabled} value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} required />
                        </div>
                    </label>

                    <label className="area">
                        <div className="area-title"></div>
                        <div className="area-input">
                            <button disabled={disabled}>Fazer Cadastro</button>
                        </div>
                    </label>
                </form>
            </SignUpStyle>
        </PageContainer>
    )
}

export default SignUp

// import React, { useState, useEffect } from 'react'
// import { SignInStyle } from './styled'
// import ConnectAPI from '../../helpers/ConnectAPI'
// import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents'

// const SignUp = () => {

//     const api = ConnectAPI()

//     const [name, setName] = useState('');
//     const [stateLoc, setStateLoc] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [stateList, setStateList] = useState([]);
//     const [disabled, setDisabled] = useState(false);
//     const [error, setError] = useState('');

//     useEffect(()=>{
//         let getStates = async () => {
//             let slist = await api.getStates()
//             setStateList(slist);
//         }
//         getStates();
//     }, []);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setDisabled(true);
//         setError('');

//         if(password !== confirmPassword) {
//             setError('Senhas não são iguais');
//             setDisabled(false)
//             return;
//         }

//         const json = await api.register(name, email, password, stateLoc);

//         // if(json.error) {
//         //     setError(json.error);
//         // } else {
//         //     doLogin(json.token);
//         //     window.location.href = '/';
//         // }

//         setDisabled(false);
//     }

//     return (
//         <PageContainer>
//             <PageTitle>Cadastro</PageTitle>
//             <SignInStyle>

//                 {error &&
//                     <ErrorMessage>{error}</ErrorMessage>
//                 }

//                 <form onSubmit={handleSubmit}>
//                     <label className="area">
//                         <div className="area-title">Nome Completo</div>
//                         <div className="area-input">
//                             <input
//                                 type="text"
//                                 disabled={disabled}
//                                 value={name}
//                                 onChange={e=>setName(e.target.value)}
//                                 required
//                             />
//                         </div>
//                     </label>
//                     <label className="area">
//                         <div className="area-title">Estado</div>
//                         <div className="area-input">
//                             <select value={stateLoc} onChange={e=>setStateLoc(e.target.value)} required>
//                                 {stateList.map((i,k)=>
//                                     <option key={k} value={i._id}>{i.name}</option>
//                                 )}
//                             </select>
//                         </div>
//                     </label>
//                     <label className="area">
//                         <div className="area-title">E-mail</div>
//                         <div className="area-input">
//                             <input
//                                 type="email"
//                                 disabled={disabled}
//                                 value={email}
//                                 onChange={e=>setEmail(e.target.value)}
//                                 required
//                             />
//                         </div>
//                     </label>
//                     <label className="area">
//                         <div className="area-title">Senha</div>
//                         <div className="area-input">
//                             <input
//                                 type="password"
//                                 disabled={disabled}
//                                 value={password}
//                                 onChange={e=>setPassword(e.target.value)}
//                                 required
//                             />
//                         </div>
//                     </label>
//                     <label className="area">
//                         <div className="area-title">Confirmar Senha</div>
//                         <div className="area-input">
//                             <input
//                                 type="password"
//                                 disabled={disabled}
//                                 value={confirmPassword}
//                                 onChange={e=>setConfirmPassword(e.target.value)}
//                                 required
//                             />
//                         </div>
//                     </label>
//                     <label className="area">
//                         <div className="area-title"></div>
//                         <div className="area-input">
//                             <button disabled={disabled}>Fazer Cadastro</button>
//                         </div>
//                     </label>
//                 </form>
//             </SignInStyle>
//         </PageContainer>
//     )
// }

// export default SignUp