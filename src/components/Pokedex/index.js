import React, { useState, useEffect } from 'react'
import * as S from './styled'
import SearchBar from '../SearchBar'
import API from '../../Constants/API'
import PokeContainer from '../PokeContainer'
import logo from '../../assets/logo.png'
import axios from 'axios'

const Pokedex = () => {
    const [pokeUrls, setPokeUrls] = useState([])
    const [pokeData, setPokeData] = useState([])
    const [foundNone, setFoundNone] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        axios.get(`${API.url}?limit=${API.count}`)
        .then(res => {
            const data = []
            res.data.results.forEach(pokemon => {
                data.push({ name: pokemon.name, url: pokemon.url })
            })
            setPokeUrls(data)
        })
    }, [])

    const handleSearch = async query => {
        const promises = []
        setIsLoading(true)
        pokeUrls.forEach(poke => {
            if (poke.name.includes(query)) {
                promises.push(fetchPokeData(poke.url))
            }
        })

        if(promises.length === 0)
            setFoundNone(true)
        else
            setFoundNone(false)

        Promise.all(promises)
        .then(responses => {
            setPokeData(responses)
            setIsLoading(false)
        })
    }

    const fetchPokeData = async pokeUrl => {
        const res = await axios.get(pokeUrl)
        return {
            image: res.data.sprites.other['official-artwork'].front_default,
            name: res.data.name,
            number: res.data.id,
            types: res.data.types,
            stats: res.data.stats
        }
    }

    return (
        <S.Container>
            <S.Logo src={logo} />
            <SearchBar handleSearch={handleSearch} />
            {
                foundNone ?
                <S.FoundNone>
                    Nenhum pokémon encontrado
                </S.FoundNone>
                :
                isLoading ?
                <S.Spinner />
                :
                <PokeContainer pokeData={pokeData} />
            }
        </S.Container>
    )
}

export default Pokedex