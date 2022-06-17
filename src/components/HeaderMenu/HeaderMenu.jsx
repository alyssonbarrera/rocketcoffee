import { useState } from 'react';
import "./HeaderMenu.css";
import { Navbar } from "../Navbar";
import { useDispatch, useSelector } from 'react-redux';
import { menuOpen } from '../../redux/action';

export function HeaderMenu () {

    const dispatch = useDispatch()
    
    return (
        <header className="menu-header">
            <Navbar openMenu={() => {dispatch(menuOpen(true))}} />
            <h1>Escolha seu café</h1>
        </header>
    )
}