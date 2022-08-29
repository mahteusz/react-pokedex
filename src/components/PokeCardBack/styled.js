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
    transform:rotateY(180deg);
`

export const StatsBarsContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    align-self:center;

`

export const PokeImage = styled.img`
    height:150px;
    width:150px;
    transform:rotateY(180deg)
`