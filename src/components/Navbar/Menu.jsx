import './Navbar.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { menuOpen } from '../../redux/action';

export function Menu() {

    const menuOpened = useSelector(state => state.openMenu);
    const dispatch = useDispatch()

    return (
        <div className='navbar__extended'>
            <ul>
                <li><Link to={"/"} onClick={() => {dispatch(menuOpen(false))}}>Home</Link></li>
                <li><Link to={"/menu"} onClick={() => {dispatch(menuOpen(false))}}>Menu</Link></li>
                <li>Recompensas</li>
                <li>Gift Card</li>
                <li>Lojas</li>
            </ul>
        </div>
    )
}