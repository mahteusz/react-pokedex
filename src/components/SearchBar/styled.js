import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;

`

export const FormContainer = styled.div`
    display:flex;
    border-radius: 20px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
    background-color:white;
    justify-content:center;
    align-items:center;
`

export const Form = styled.form`
    display:flex;
    padding: 5px 8px;
`

export const Input = styled.input`
    width:250px;
    font-size:12px;
    font-weight:600;
    color:#aaa;
    border-radius:25px;
    border:0;
    padding:10px 13px;
    text-transform:uppercase;

    &:focus {
        outline:0;
    }
`

export const SubmitButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #cc0000;
    border-radius:50%;
    width:35px;
    height:35px;
    border:0;
    margin:0 10px;
    cursor:pointer;
`

export const IconSubmitButton = styled.img`
    width:60%;
    height:60%
`