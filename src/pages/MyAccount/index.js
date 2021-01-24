import React, {useState, useEffect} from "react";
import { PageArea } from './styled';

import useApi from '../../helpers/ConnectAPI';
import { doLogin } from '../../helpers/AuthHendler';

import { PageContainer, PageTitle, ErrorMessage} from '../../components/MainComponents';

import Cookies from 'js-cookie';
import AdItem from "../../components/partials/AdItem";

const Page = () =>{
  const api = useApi()
  //import * as api from '../../helpers/ConnectAPI'

  const [name, setName] = useState('');
  const [stateLoc, setStateLoc] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [stateList, setStateList] = useState([]);
  const [listAds, setListAds] = useState([]);

  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');

  useEffect (() =>{
    const getStates = async () =>{
      const slist = await api.getStates();
      setStateList(slist);
    }
    getStates();
  }, []);

  useEffect(() =>{    
    const getUsers = async () =>{      
      const user = await api.getUsers()
      setName(user.name);
      setEmail(user.email);
      setListAds(user.ads);
      setStateLoc(user.state);
      
    }
    getUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setDisabled(true)
    setError('')

    if(password !== confirmPassword){
      setError('Senhas não batem!!');
      setDisabled(true);
      return;
    }

    let token = Cookies.get('token');
    const json = await api.editUser(token, name, email, password, stateLoc);

    if(json.error){
      setError(json.error);
    }else{
      doLogin(json.token);
      window.location.href = '/';
    }

    setDisabled(false);
  }

  return(
    <>
      <PageContainer>
      <PageTitle>Alterar Cadastro</PageTitle>    
        <PageArea>

          {error &&
            <ErrorMessage>{error}</ErrorMessage>
          }

          <form onSubmit={handleSubmit}>
            <label>
              <div className="area"> 
                <div className="area--title">Nome Completo</div>
                <div className="area--input">
                  <input 
                    type="text" 
                    disabled={disabled}
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    required></input>
                </div>
              </div>
            </label>

            <label>
              <div className="area"> 
                <div className="area--title">Estado</div>
                <div className="area--input">
                  <select required value={stateLoc} onChange={e => setStateLoc(e.target.value)}>
                    {stateList.map((i,k) =>
                      <option key={k} value={i.name}>{i.name}</option>
                    )}

                  </select>
                </div>
              </div>
            </label>

            <label>
              <div className="area"> 
                <div className="area--title">E-mail</div>
                <div className="area--input">
                  <input 
                    type="email" 
                    disabled={disabled}
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    required></input>
                </div>
              </div>
            </label>

            <label>
              <div className="area"> 
                <div className="area--title">Senha</div>
                <div className="area--input">
                  <input
                    type="password"
                    disabled={disabled}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  >
                  </input>
                </div>
              </div>
            </label>

            <label>
              <div className="area"> 
                <div className="area--title">Confirmar Senha</div>
                <div className="area--input">
                  <input
                    type="password"
                    disabled={disabled}
                    value={confirmPassword}
                    onChange={e=>setConfirmPassword(e.target.value)}
                  ></input>
                </div>
              </div>
            </label>
            

            <label>
              <div className="area"> 
                <div className="area--title"></div>
                <div className="area--input">
                  <button disabled={disabled}>Alterar Cadastro</button>
                </div>
              </div>
            </label>
          </form>
        </PageArea>
      </PageContainer>

      <PageContainer>
        <PageArea>
        {/* <h2>Meus Anúncios</h2>     
        <div className="list">
              {listAds.map((i,k) =>
                <AdItem key={k} data={i} controle= {1}/>  
              )}
        </div> */}
        </PageArea>
      </PageContainer>
    </>
  );
}

export default Page;