import './Navbar.css';
import LogoMobile from './img/logo mobile.svg'
import Logo from './img/Logo.svg'
import MenuHamburguer from './img/Menu Hambúrguer.svg'
import CloseMenu from './img/Close.svg'
import { Menu } from './Menu';
import { Button } from '../Button/Button';

export function Navbar({openMenu = () => {}, open}) {
    {
        open ? document.body.classList.add("menu-extended") : document.body.classList.remove("menu-extended");
    }
    return (
        <nav className={`navbar ${open ? 'extended' : ''}`}>
            <header className='navbar__header'>
                <div className='navbar__logo'>
                    <img src={LogoMobile} alt="Logo" />
                    <img src={Logo} alt="Logo" />
                </div>
                <div className='navbar__menu'>
                    <img onClick={() => openMenu(true)} src={MenuHamburguer} alt="Menu" arial-label="Abrir menu" aria-expanded="false" />
                    <img onClick={() => openMenu(false)} src={CloseMenu} alt="Fecha Menu" arial-label="Fechar menu" aria-expanded="true" />
                </div>
                <Menu />
                <Button text="pegar meu café" />
            </header>
        </nav>
    )
}