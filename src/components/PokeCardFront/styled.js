import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    width:187px;
    min-height:262px;
    background-color:white;
    border-radius:20px;
    box-shadow: 0px 0px 20px ${props => props.backgroundColor};
    margin:0 10px;
    position:absolute;
    backface-visibility:hidden;
`

export const ImageContainer = styled.div`
    background-color:${props => props.backgroundColor};
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:20px;
`

export const InfoContainer = styled.div`
    display:flex;
    flex-direction:column;
`

export const PokeImage = styled.img`
    height:150px;
    width:150px;
`

export const PokeNumber = styled.span`
    font-size:21px;
    font-family:"Righteous", sans-serif;
    color:#bbb;
`

export const PokeName = styled.span`
    font-size:18px;
    margin:0 5px;
    font-family:"Righteous", sans-serif;
    text-align: center;
    text-transform:capitalize;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

`

export const InfoItemContainer = styled.div`
    display:flex;
    justify-content:space-evenly;
    margin:3px 0;
`
export const Type = styled.span`
    background-color:${props => props.backgroundColor};
    color:white;
    border-radius:20px;
    padding: 8px 14px;
    font-size:15px;
    font-family:"Righteous", sans-serif;
    margin-bottom:10px;
`