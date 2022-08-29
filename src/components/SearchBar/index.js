import React, { useState } from 'react'
import * as S from './styled'
import pokeballImage from '../../assets/pokeball.png'

const SearchBar = ({ handleSearch }) => {
    const [query, setQuery] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        handleSearch(query)
    }

    return (
        <S.Container>
            <S.FormContainer>
                <S.Form onSubmit={(e) => onSubmit(e)}>
                    <S.Input
                        minLength="3"
                        type="text"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder="Procure seu pokémon"
                    />
                    <S.SubmitButton type="submit" className='searchButton'>
                        <S.IconSubmitButton src={pokeballImage} />
                    </S.SubmitButton>
                </S.Form>
            </S.FormContainer>
        </S.Container>
    )
}

export default SearchBar