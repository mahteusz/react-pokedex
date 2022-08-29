import styled from "styled-components";

export const Container = styled.div`
    width:187px;
    min-height:262px;
    transform-style:preserve-3d;
    transition: all 0.5s ease;
    transform-origin:55%;
    cursor: pointer;

    ${props => {
        if(props.flip)
            return `
                transform: rotateY(180deg)
            `
    }}

    /* &:hover {
        transform: rotateY(180deg)
    } */

`