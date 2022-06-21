import styled from 'styled-components';

export const ContentFirstSection = styled.section`
    margin-inline: 2.8rem;
    margin-top: 8.85rem;
    margin-bottom: 9.8rem;

    @media (min-width: 1000px) {
        display: none;
    }
`

export const ContentFirstHeader = styled.header`
    display: flex;
    align-items: center;
    flex-direction: column;

    gap: 8.8rem;
`

export const ContentFirstHeaderTitle = styled.h1`
    font-size: 3rem;
    font-weight: 600;

    line-height: 4.1rem;
    letter-spacing: 0.02em;

    text-align: center;
    color: white;
`

export const ContentSecondSection = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    &:before {
        content: '';

        position: fixed;
        top: 706px;

        width: 321px;
        height: 321px;

        background: #996DFF;
        filter: blur(400px);

        z-index: -1;
    }

    @media (min-width: 1000px) {
        &:before {
            content: '';
            
            position: fixed;
            left: -29px;
            bottom: 0;

            width: 321px;
            height: 321px;

            background: #996DFF;
            filter: blur(400px);
        }
    }
`
export const ContentSecondHeader = styled.header`
    display: flex;
    flex-direction: column;

    text-align: center;

    margin-inline: 4.2rem;
`

export const ContentSecondHeaderTitleOne = styled.h2`
    display: inline-block;

    font-family: 'Roboto', sans-serif;
    font-size: 5rem;
    font-weight: 700;

    color: white;

    line-height: 6.8rem;
    letter-spacing: 0.01em;

    height: 54px;

    @media (min-width: 1000px) {
        font-size: 8rem;

        margin-top: 4rem;
    }

    @media (min-width: 1600px) {
        font-size: 10rem;

        margin-top: 4rem;
    }
`

export const ContentSecondHeaderTitleTwo = styled.h2`
    display: inline-block;
        
    font-family: 'Roboto', sans-serif;
    font-size: 5rem;
    font-weight: 700;

    color: transparent;

    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #8257E5;

    line-height: 6.8rem;
    letter-spacing: -0.03em;

    width: 34.6rem;
    height: 6.9rem;

    @media (min-width: 1000px) {
        font-size: 8rem;

        margin-top: 4rem;

        width: auto;
    }

    @media (min-width: 1600px) {
        width: auto;

        font-size: 10rem;

        margin-top: 4rem;
        
    }
`

export const ContentSecondSectionImg = styled.img`
    display: block;

    width: 100%;

    margin-top: 3.2rem;

    position: relative;
    bottom: 0;

    z-index: -1;

    @media (min-width: 1000px) {
        max-width: 79.8rem;

        position: absolute;
        bottom: 0;
    }

    @media (min-width: 1600px) {
        max-width: 100rem;

        position: absolute;
        bottom: 0;
    }
`