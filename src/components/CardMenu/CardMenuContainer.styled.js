import styled from 'styled-components';

export const CardMenuContainerSection = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;

    padding-bottom: 5rem;
    padding-inline: 2rem;

    &:before {
        content: '';
        
        position: fixed;
        left: -29px;
        bottom: 0;

        width: 321px;
        height: 321px;

        background: #996DFF;
        filter: blur(400px);

        z-index: -1;
    }
`