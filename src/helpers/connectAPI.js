import Cookies from 'js-cookie'
import axios from 'axios'
import qs from 'qs'

const BASEAPI = 'http://localhost:3001'

const ClientHTTPPost = async (endpoint, body) => {

    if(!body.token){
        let token = Cookies.get('token')
        if(token){
            body.token = token
        }
    }

    const res = await axios(BASEAPI+endpoint,{
        method:POST,
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(body)
    })
    const connect = await res.json()

    if(connect.allowed){
        window.location.href = '/signin'
        return
    }

    return connect
}

const ClientHTTPGet = async (endpoint, body = []) => {

    if(!body.token){
        let token = Cookies.get('token')
        if(token){
            body.token = token
        }
    }

    const res = await axios(`${BASEAPI+endpoint}?${qs.stringify(body)}`)
    const connect = await res.json()

    if(connect.allowed){
        window.location.href = '/signin'
        return
    }

    return connect
}

const connectAPI = {
    login: async(email,password) => {

        const connect = await ClientHTTPPost(
            '/user/signin', {email, password}
        )
        return connect

        //Teste mostrando erro quando informações no signin não eram inseridas - Pré-API
        // return{
        //     error: 'Funcionalidade Incompleta'
        // }
    }
}

export default () => connectAPI