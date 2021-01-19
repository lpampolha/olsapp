import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SearchArea, SignInStyle } from './styled'
import ConnectAPI from '../../helpers/ConnectAPI'
import { PageContainer } from '../../components/MainComponents'
import AdItem from '../../components/partials/AdItem'

const Home = () => {

    const api = ConnectAPI()

    const [statesList, setStatesList] = useState([])
    const [categoriesList, setCategoriesList] = useState([])
    const [adList, setAdList] = useState([])

    useEffect(()=>{
        let getStates = async () => {
            let slist = await api.getStates()
            setStatesList(slist)
        }
        getStates()
    }, [])

    useEffect(()=>{
        let getCategories = async () => {
            let cats = await api.getCategories();
            setCategoriesList(cats);
        }
        getCategories();
    }, [])

    useEffect(()=>{
        let getRecentAds = async () => {
            let json = await api.getAds({
                sort: 'desc',
                limit: 8 
            });
            setAdList(json.ads);
        }
        getRecentAds();
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
                    
                    <div className="categoryList">
                        {categoriesList.map((i,k)=>
                            <Link key={k} to={`/ads?cat=${i.slug}`} className="categoryItem">
                                <img src={i.icon} alt="" />
                                <span>{i.name}</span>
                            </Link>    
                        )}
                    </div>
                </PageContainer>
            </SearchArea>
            
            <PageContainer>
                <SignInStyle>
                    <h2>Anúncios Recentes</h2>
                    <div className="list">
                        {adList.map((i,k)=>
                            <AdItem key={k} data={i} />
                        )}
                    </div>
                    <Link to="/ads" className="seeAllLinks">Ver todos</Link>
                    <hr />

                    Loren Loren Loren Loren Loren Loren Loren Loren Loren Loren Loren Loren Loren Loren Loren 
                </SignInStyle>
            </PageContainer>
        </>
    )
}

export default Home