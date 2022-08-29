import React from 'react'
import PokeCard from '../PokeCard'
import * as S from './styled'

const PokeContainer = ({ pokeData }) => {
    return (
        <S.Container>
        {
            pokeData.map((poke) => {
                return (
                    <PokeCard key={poke.number}
                        image={poke.image}
                        number={poke.number}
                        name={poke.name}
                        types={poke.types}
                        stats={poke.stats}
                    />
                )
            })
        }
        </S.Container>
    )
}

export default PokeContainer