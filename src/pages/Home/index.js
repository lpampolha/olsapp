import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SearchArea, SignInStyle } from './styled'
import ConnectAPI from '../../helpers/ConnectAPI'
import { PageContainer } from '../../components/MainComponents'

const Home = () => {

    const api = ConnectAPI()

    const [statesList, setStatesList] = useState([])
    const [categoriesList, setCategoriesList] = useState([])

    useEffect(()=>{
        let getStates = async () => {
            let slist = await api.getStates()
            setStatesList(slist)
        }
        getStates
    }, [])

    useEffect(()=>{
        let getCategories = async () => {
            let cats = await api.getCategories();
            setCategoriesList(cats);
        }
        getCategories();
    }, [])

    return (

        <>
            <SearchArea>
                <PageContainer>
                <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input type="text" name="q" placeholder="O que você procura?" />
                            <select name="state">
                                {statesList.map((i,k)=>
                                    <option key={k} value={i.name}>{i.name}</option>    
                                )}
                            </select>
                            <button>Pesquisar</button>
                        </form>
                    </div>
                    
                    <div className="categoriesList">
                        {categoriesList.map((i,k)=>
                            <Link key={k} to={`/categories=${i.slug}`} className="categoriesList">
                                <img src={i.icon} alt="" />
                                <span>{i.name}</span>
                            </Link>    
                        )}
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