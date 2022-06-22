import styled from 'styled-components';

export const OrderCardContainer = styled.section`

@media (max-width: 775px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

`

export const OrderCardContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    border: 1px solid #8257E5;
    border-radius: 1rem;

    margin-inline: 2rem;
    margin-block: 2rem;


    @media (max-width: 775px) {
        flex-direction: column;
        width: 30rem;
        max-width: 50rem;

        padding-bottom: 2rem
    }
`

export const OrderCardContentLeft = styled.div`
    display: flex;
    
    @media (max-width: 775px) {
        flex-direction: column;
        align-items: center;
    }

`

export const OrderCardContentLeftImg = styled.img`
    width: 10rem;
    height: 10rem;

    border-radius: 1rem;

    @media (max-width: 775px) {
        width: 100%;
        height: auto;
    }

`
export const OrderCardContentLeftText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-left: 2rem;

    @media (max-width: 775px) {
        margin-left: 0;
    }
`

export const OrderCardContentLeftTextTitle = styled.h3`
    color: white;
    font-size: 3rem;

    @media (max-width: 775px) {
        text-align: center;
    }

`

export const OrderCardContentLeftTextParagraph = styled.p`
    color: white;
    font-size: 1.5rem;
    text-align: left;

    @media (max-width: 775px) {
        text-align: center;
    }

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

    @media (max-width: 775px) {
        text-align: center;
    }

`