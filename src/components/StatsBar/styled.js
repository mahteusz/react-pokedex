import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:3px;
`

export const BarContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`

export const BarBackground = styled.div`
    width:${props => props.width};
    border:2px solid;
    border-radius:20px;
    background-color:#ddd;
`
export const BarProgress = styled.div`
    height:8px;
    width:${props => props.width};
    background-color:${props => props.backgroundColor};
    border-radius:20px;
`

export const StatsName = styled.span`
    font-family:'Righteous', sans-serif;
    font-size:10px;
    text-transform:uppercase;
    position:absolute;
    color:black;
    

`