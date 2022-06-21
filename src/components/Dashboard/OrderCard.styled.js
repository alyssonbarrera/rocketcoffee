import styled from 'styled-components';

export const OrderCardContainer = styled.section`

`

export const OrderCardContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    border: 1px solid #8257E5;
    margin-inline: 2rem;
`

export const OrderCardContentLeft = styled.div`
    display: flex;

`

export const OrderCardContentLeftImg = styled.img`
    width: 10rem;

`
export const OrderCardContentLeftText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-left: 2rem;
`

export const OrderCardContentLeftTextTitle = styled.h3`
    color: white;
    font-size: 3rem;

`

export const OrderCardContentLeftTextParagraph = styled.p`
    color: white;
    font-size: 1.5rem;
    text-align: left;

`

export const OrderCardContentRight = styled.div`
    display: flex;
    flex-direction: column;

`

export const OrderCardContentRightText = styled.span`
    color: white;
    text-align: end;
    font-size: 1.5rem;
    line-height: 3rem;
    
    margin-right: 2rem;

`