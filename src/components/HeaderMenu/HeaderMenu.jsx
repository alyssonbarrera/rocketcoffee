import { HeaderMenuContainer } from './HeaderMenu.styled';
import { HeaderMenuContainerTitle } from './HeaderMenu.styled';

import { Navbar } from "../Navbar";

import { menuOpen } from '../../redux/action';
import { useDispatch } from 'react-redux';

export function HeaderMenu () {

    const dispatch = useDispatch()
    
    return (
        <HeaderMenuContainer>
            <Navbar openMenu={() => {dispatch(menuOpen(true))}} />
            <HeaderMenuContainerTitle>
                Escolha seu café
            </HeaderMenuContainerTitle>
        </HeaderMenuContainer>
    )
}