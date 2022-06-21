import './Navbar.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { menuOpen } from '../../redux/action';
import { useLocation } from 'react-router-dom';

export function Menu() {

    const dispatch = useDispatch()
    const location = useLocation()
    const path = location.pathname

    return (
        <div className={`navbar__extended ${path == '/menu' ? "location-menu" : 'location-home'}`}>
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