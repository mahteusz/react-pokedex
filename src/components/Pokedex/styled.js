import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    margin-top:50px;
    width: 80%;
    display:flex;
    flex-direction: column;
    align-items: center;
    gap:20px;
`

export const Logo = styled.img`
    height:82px;
    width:224px;
`
export const FoundNone = styled.span`
    font-size:20px;
    text-align:center;
    font-family:'Righteous', sans-serif;
`

const spin = keyframes`
    0% {
    transform: rotate(0deg);
    }
    100% {
    transform: rotate(360deg);
    }

`

export const Spinner = styled.div`
    width: 50px;
    height: 50px;
    border: 10px solid #aaa; 
    border-top: 10px solid #cc0000; 
    border-radius: 50%;
    animation: ${spin} 1.5s linear infinite;
`
