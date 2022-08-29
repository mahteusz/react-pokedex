import React from 'react'
import * as S from './styled'

const StatsBar = ({value, max, name, backgroundColor}) => {
  return (
    <S.Container>
        <S.BarContainer>
            <S.BarBackground width={max}>
                <S.BarProgress width={value} backgroundColor={backgroundColor}/>
            </S.BarBackground>
        </S.BarContainer>
        <S.StatsName>
            {name}
        </S.StatsName>
    </S.Container>
  )
}

StatsBar.defaultProps = {
    max:'150px'
}

export default StatsBar