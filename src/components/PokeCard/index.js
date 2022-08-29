import React, { useState } from 'react'
import * as S from './styled'
import PokeCardFront from '../PokeCardFront'
import PokeCardBack from '../PokeCardBack'

const PokeCard = ({image, number, name, types, stats}) => {
    const [flip, setFlip] = useState(false)

    return (
        <S.Container onClick={() => setFlip(!flip)} flip={flip}>
            <PokeCardFront
                image={image}
                number={number}
                name={name}
                types={types}
            />
            <PokeCardBack
                image={image}
                types={types}
                stats={stats}
            />
        </S.Container>
    )
}

export default PokeCard