import styled from "styled-components";

export const CardMenuModal = styled.div`
    display: flex;

    max-width: 24.2%;
    min-width: 27rem;

    position: fixed;
    top: 16%;

    border-radius: 1rem;

    -webkit-box-shadow: 0px 0px 50px 100vw rgba(0,0,0,0.42);
    -moz-box-shadow: 0px 0px 50px 100vw rgba(0,0,0,0.42);
    box-shadow: 0px 0px 50px 100vw rgba(0,0,0,0.42);
`
export const CardMenuModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    max-width: 60rem;

    padding: 1rem;

    background-color: #8257E5;
    border-radius: 0.5rem;

    .add__button {
        position: relative;

        display: flex;
        width: 3rem;
        left: calc(100% - 2.7rem);
        margin: 0;

        padding: 0.5rem;
        border-radius: 0.5rem;
        background-color: #ffffff;
        border: none;

        cursor: pointer;
    }
`

export const CardMenuModalContentTitle = styled.h2`
    color: white;
    text-align: center;
    font-size: 4rem;
    font-weight: bold;
    
    padding-bottom: 1rem;
    
    border-bottom: 1px solid white;
`

export const CardMenuModalContentParagraphOne = styled.p`
    color: white;
    text-align: center;
    font-size: 3.5rem;
    font-weight: bold;

    margin-bottom: 0.5rem;
`

export const CardMenuModalContentParagraphTwo = styled.p`
    color: white;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
`

export const CardMenuModalContentImg = styled.img`
    width: 100%;
    height: auto;
`