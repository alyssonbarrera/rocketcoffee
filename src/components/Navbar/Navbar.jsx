import './Navbar.css';
import LogoMobile from './img/logo mobile.svg'
import Logo from './img/Logo.svg'
import MenuHamburguer from './img/Menu Hambúrguer.svg'
import CloseMenu from './img/Close.svg'
import { Menu } from './Menu';
import { Button } from '../Button/Button';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { menuOpen } from '../../redux/action';

export function Navbar() {

        const menuOpened = useSelector(state => state.openMenu);
        const dispatch = useDispatch()

        const location = useLocation()

        menuOpened ? document.body.classList.add("menu-extended") : document.body.classList.remove("menu-extended");

    return (
        <nav className={`navbar ${menuOpened ? 'extended' : ''}`}>
            <header className='navbar__header'>
                <div className='navbar__logo'>
                    <img src={LogoMobile} alt="Logo" />
                    <img src={Logo} alt="Logo" />
                </div>
                <div className='navbar__menu'>
                    <img onClick={() => dispatch(menuOpen(true))} src={MenuHamburguer} alt="Menu" arial-label="Abrir menu" aria-expanded="false" />
                    <img onClick={() => dispatch(menuOpen(false))} src={CloseMenu} alt="Fecha Menu" arial-label="Fechar menu" aria-expanded="true" />
                </div>
                <Menu />
                <Link className='navbar__link' to={"/menu"}><Button buttonText="pegar meu café" especificClass={'menu'} /></Link>
            </header>
        </nav>
    )
}