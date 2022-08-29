import React from 'react'
import COLORS from '../../Constants/styles'
import MAX_STATS from '../../Constants/stats'
import * as S from './styled'
import {ImageContainer} from '../PokeCardFront/styled'
import StatsBar from '../StatsBar'

const PokeCardBack = ({image, name, types, stats}) => {
    const borderDiscount = 2
    
    const normalizeStatName = stat => {
        switch(stat){
            case 'attack':
                return 'atk'
            case 'defense':
                return 'def'
            case 'special-attack':
                return 'sp-atk'
            case 'special-defense':
                return 'sp-def'
            default:
                return stat
        }
    }

    const normalizeStatValue = (value, stat) => {
        return value*100/MAX_STATS[stat]
    }

    const statToBarPercentage = value => {
        return value/100*149 - borderDiscount + 'px'
    }

    return (
        <S.Container backgroundColor={COLORS[types[0].type.name]}>
            <ImageContainer backgroundColor={COLORS[types[0].type.name]}>
                <S.PokeImage src={image} alt={name} />
            </ImageContainer>

            <S.StatsBarsContainer>
                {
                    stats.map(stat => {
                        return(
                            <StatsBar
                                key={name+stat.stat.name}
                                value={statToBarPercentage(normalizeStatValue(stat.base_stat, stat.stat.name))}
                                name={normalizeStatName(stat.stat.name)}
                                backgroundColor={COLORS[types[0].type.name]}
                            />
                        )
                    })
                }
            </S.StatsBarsContainer>
        </S.Container>

  )
}

export default PokeCardBack