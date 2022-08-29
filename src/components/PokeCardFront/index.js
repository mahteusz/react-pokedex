import React from 'react'
import * as S from './styled'
import COLORS from '../../Constants/styles'

const PokeCardFront = ({ image, number, name, types }) => {
  return (
    <S.Container backgroundColor={COLORS[types[0].type.name]}>
      <S.ImageContainer backgroundColor={COLORS[types[0].type.name]}>
        <S.PokeImage src={image} alt={name} />
      </S.ImageContainer>

      <S.InfoContainer>
        <S.InfoItemContainer>
          <S.PokeNumber>
            #{number}
          </S.PokeNumber>
        </S.InfoItemContainer>
        <S.InfoItemContainer>
          <S.PokeName>
            {name}
          </S.PokeName>
        </S.InfoItemContainer>

        <S.InfoItemContainer>
          {
            types.map(type => {
              return (
                <S.Type backgroundColor={COLORS[type.type.name]} key={name+type.type.name}>
                  {type.type.name}
                </S.Type>
              )
            })
          }
        </S.InfoItemContainer>
      </S.InfoContainer>
    </S.Container>
  )
}

export default PokeCardFront