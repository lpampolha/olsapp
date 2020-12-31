import Cookies from 'js-cookie';
import qs from 'qs';

//const BASEAPI = 'http://localhost:3001';
const BASEAPI = 'https://olsapi.herokuapp.com'

const apiFetchPost = async (endpoint, body) => {
    if(!body.token) {
        let token = Cookies.get('token');
        if(token) {
            body.token = token;
        }
    }
    const res = await fetch(BASEAPI+endpoint, {
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(body)
    });
    const json = await res.json();

    if(json.notallowed) {
        window.location.href = '/signin';
        return;
    }

    return json;
}
const apiFetchGet = async (endpoint, body = []) => {
    if(!body.token) {
        let token = Cookies.get('token');
        if(token) {
            body.token = token;
        }
    }
    const res = await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);
    const json = await res.json();

    if(json.notallowed) {
        window.location.href = '/signin';
        return;
    }

    return json;
}

const ConnectAPI = {

    login:async (email, password) => {
        const json = await apiFetchPost(
            '/user',
            {email, password}
        );
        return json;
    },

    register:async (name, email, password, stateLoc) => {
        const json = await apiFetchPost(
            '/signup',
            {name, email, password, state:stateLoc}
        );
        return json;
    },

    getStates:async () => {
        const json = await apiFetchGet(
            '/state'
        )
        return json.state
    },

    getCategories:async () => {
        const json = await apiFetchGet(
            '/categories'
        )
        return json.categories
    }

};

export default () => ConnectAPI