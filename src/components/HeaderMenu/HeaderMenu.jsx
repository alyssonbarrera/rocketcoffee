import "./HeaderMenu.css";
import { Navbar } from "../Navbar";

export function HeaderMenu () {
    return (
        <>
            <header className="menu-header">
                <Navbar />
                <h1>Escolha seu café</h1>
            </header>
        </>
    )
}