import styled from 'styled-components';

export const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    max-width: 19%;
    min-width: 25rem;

    border: 2px solid #8257E5;
    border-radius: 1rem;

    background-color: #000;
`
export const CardHeaderStyled = styled.header`
 
`

export const CardContentStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;

    height: 100%;

    .ant-input-number {
        margin-inline: auto;
        border: none;
    }

    .ant-input-number-input-wrap {
        background-color: #8257E5;
        color: white;
        border: none;
    }
`

export const CardHeaderImgStyled = styled.img`

    width: 100%;
    border-radius: 0.6rem 0.6rem 0 0;
`

export const CardContentTitleStyled = styled.h2`
    font-size: 3rem;
    text-align: center;
    color: white;

    margin: 0 1rem;
`
export const CardContentParagraphStyled = styled.p`
    font-size: 1.5rem;
    text-align: center;
    color: white;

    margin: 0 1rem;
`