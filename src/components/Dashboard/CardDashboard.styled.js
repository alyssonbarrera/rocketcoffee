import styled from 'styled-components';

export const DashboardContainer = styled.section`
    position: fixed;
    left: 50%;

    max-width: 25%;
    min-width: 30rem;

    background-color: #000000;
    border-radius: 1.2rem;

    transform: translateX(-50%);    

    -webkit-box-shadow: 0px 0px 50px 100vw rgba(0,0,0,0.42);
    -moz-box-shadow: 0px 0px 50px 100vw rgba(0,0,0,0.42);
    box-shadow: 0px 0px 50px 100vw rgba(0,0,0,0.42);
`
export const DashboardContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    border: 1px solid #8257E5;
    border-radius: 1rem;

    .add__button {
        position: absolute;

        display: flex;
        width: 3rem;
        right: 0;
        margin: 0;

        padding: 0.5rem;
        border-radius: 0.5rem;
        background-color: #ffffff;
        border: none;

        cursor: pointer;
    }

    
    .add__button img {
        width: 100%;
}
`
export const DashboardContentContainerForm = styled.form`
    display: flex;
    flex-direction: column;

    gap: 2rem;

    .ant-input-number {
        margin-inline: auto;

        height: 3.5rem;

        color: black;
        font-size: 2rem;

        background-color: #8257E5;
        border: none
    }
`
export const DashboardContentContainerFormLabel = styled.label.attrs(props => ({
    htmlFor: props.htmlFor
}))`
    cursor: pointer;

`

export const DashboardContentContainerFormLabelImg = styled.img`
    width: 100%;
    border-radius: 1rem;
`

export const DashboardContentContainerFormInputOne = styled.input.attrs(props => ({
    type: 'file',
    id: props.id,
    accept: 'image/*'

}))`
    display: none;
`

export const DashboardContentContainerFormInputTwo = styled.input.attrs(props => ({
    type: 'text',
    placeholder: props.placeholder,
    name: props.name
}))`
    width: 100%;
    height: 4rem;

    padding-inline: 1rem;

    font-size: 1.8rem;
    color: #ffffff;

    background-color: transparent;
    border: none;
    border-bottom: 1px solid #8257E5;

    outline: none;
`

export const DashboardContentContainerFormInputThree = styled.input.attrs(props => ({
    type: 'text',
    placeholder: props.placeholder,
    name: props.name
}))`
    width: 100%;
    height: 4rem;

    padding-inline: 1rem;

    font-size: 1.8rem;
    color: #ffffff;

    background-color: transparent;
    border: none;
    border-bottom: 1px solid #8257E5;

    outline: none;
`