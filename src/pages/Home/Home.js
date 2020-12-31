import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SearchArea, SignInStyle } from './styled'
import ConnectAPI from '../../helpers/ConnectAPI'
import { PageContainer } from '../../components/MainComponents'

const Home = () => {

    const api = ConnectAPI()

    const [stateList, setStateList] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        const getStates = async () => {
            const slist = await api.getStates
            setStateList(slist)
        }
        getStates
    }, [])

    useEffect(()=>{
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    }, [])

    return (

        <>
            <SearchArea>
                <PageContainer>
                    <div className='searchBox'>
                        <form method='GET' action='/ads'>
                            <input type='text' name='q' placeholder='O que você procura?' />
                                <select name='state'>
                                    {stateList.map((i,k)=>
                                            <option key={k} value={i.name}>{i.name}</option>
                                        )}
                                </select>
                                <button>Pesquisar</button>
                        </form>
                    </div>
                    
                    <div className="categoryList">
                        {categories.map((i,k)=>
                            <Link key={k} to={`/ads?cat=${i.slug}`} className="categoryItem">
                                <img src={i.img} alt="" />
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