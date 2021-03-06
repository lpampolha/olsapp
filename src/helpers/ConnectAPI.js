import Cookies from 'js-cookie';
import qs from 'qs';

// const BASEAPI = 'http://localhost:3001';
const BASEAPI = 'https://olsapi.herokuapp.com'

const apiFetchPost = async (endpoint, body) => {

    if(!body.token){
        //pega o token do Cookie
        let token = Cookies.get('token');
        if(token){
            body.token = token;
        }
    }

    const res = await fetch(BASEAPI + endpoint, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(body)
    });
    const json = await res.json();

    if(json.notallowed){
        window.location.href = '/signin';
        return;
    }

    return json;
}

const apiFetchGet = async (endpoint, body = []) => {
    if(!body.token){
        //pega o token do Cookie
        let token = Cookies.get('token');
        if(token){
            body.token = token;
        }
        console.log(token);
    }

    const res = await fetch(`${BASEAPI + endpoint}?${qs.stringify(body)}`);
    const json = await res.json();


    if(json.notallowed){
        window.location.href = '/login';
        return;
    }

    return json;
}

const apifetchFile = async (endpoint, body) => {
    if(!body.token){
        //pega o token do Cookie
        let token = Cookies.get('token');
        console.log('token: ');
        console.log(token);
        if(token){
            body.append('token' , token);
        }
    }

    const res = await fetch(BASEAPI+endpoint, {
        method: 'POST',
        body
    });
    const json = await res.json();

    if(json.notallowed){
        window.location.href = '/signin';
        return;
    }

    return json;
}

const ConnectAPI = {

    login:async(email,password) =>{
        //fazer consulta ao Webservice
        const json = await apiFetchPost(
            '/user/signin',
            {email, password}
        );
        return json;

        //return {error:'Funcionalidade Incompleta'};
    },

    register:async (name, email, password, stateLoc) => {
        const json = await apiFetchPost(
            '/user/signup',
            {name, email, password, state:stateLoc}
        );
        return json;
    },
    getUsers:async () => {
        const json = await apiFetchGet(
            '/users'
        );
        return json.users;
    },
    editUser:async () => {
        const json = await apiFetchGet(
            '/users/:id'
        );
        return json.users;
    },
    getStates:async () => {
        const json = await apiFetchGet(
            '/states'
        );
        return json.states;
    },
    getCategories:async () => {
        const json = await apiFetchGet(
            '/categories'
        );
        return json.categories;
    },
    getAds:async (options) => {
        const json = await apiFetchGet(
            '/ad/list',
            options
        );
        return json;
    },
    getAd:async (id, other = false) => {
        const json = await apiFetchGet('/ad/item',{id, other});
        console.log(json);
        return json;
    },
    //não é get nem post, é usado para o envio de arquivos
    addAd:async (fData) => {
        const json = await apifetchFile(
            '/ad/add',
            fData
        );
        return json;
    }
}       

export default () => ConnectAPI