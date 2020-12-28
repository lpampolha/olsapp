const connectAPI = {
    login: async(email,password) => {

        const json = await ClientHTTP(
            '/user/signin', {email, password}
        )

        //Teste mostrando erro quando informações no signin não eram inseridas - Pré-API
        // return{
        //     error: 'Funcionalidade Incompleta'
        // }
    }
}

export default () => connectAPI