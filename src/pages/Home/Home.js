import React, { useState } from 'react'
import { SearchArea, SignInStyle } from './styled'
import ConnectAPI from '../../helpers/ConnectAPI'
import { PageContainer } from '../../components/MainComponents'

const Home = () => {

    const api = ConnectAPI()

    return (

        <>
            <SearchArea>
                <PageContainer>
                    <div className='searchBox'>
                        <form method='GET' action='/ads'>
                            <input type='text' name='q' placeholder='O que você procura?' />
                                <select name='state'>

                                </select>
                                <button>Pesquisar</button>
                        </form>
                    </div>
                    
                    <div className='categoryList'>
                        
                    </div>
                </PageContainer>
            </SearchArea>
            
            <PageContainer>
                <SignInStyle>
                    ...
                </SignInStyle>
            </PageContainer>
        </>
    )
}

export default Home