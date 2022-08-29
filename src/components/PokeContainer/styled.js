import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap:20px;
    margin-bottom:50px;

    @media (min-width: 600px) {
        width:100%;
        flex-direction: row;
    }

    @media (min-width: 1024px) {
        width:80%;
    }
`
