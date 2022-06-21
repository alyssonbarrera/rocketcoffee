import styled from 'styled-components';

export const ButtonStyled = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    pointer-events: ${props => (props.disabled ? 'none' : 'auto')};

    padding: 1rem 3rem;

    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.1rem;

    border: 1px solid #8257E5;
    border-radius: 0.5rem;
    background-color: transparent;
    
    transition: background 0.2s;

    cursor: pointer;

    &[data-variant_size="medium"] {
        @media (min-width: 1000px) {
            width: 17rem;
        }

        @media (min-width: 1600px) {
            width: auto;
            font-size: 1.5rem;
        }
    }

    &:hover {
        background-color: #8257E5;
    }
`

export const ButtonImageStyled = styled.div`
    display: flex;
    > img {
        width: 100%;
    }
`