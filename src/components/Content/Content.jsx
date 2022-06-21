import './Content.css'
import { Button } from '../Button/Button';
import secondImgCoffee from './img/rocket-coffee.png'
import { Link } from 'react-router-dom';
import Vector from "./img/Vector.svg";

export function Content() {
    return (
        <>
        
        <section className="content__first_section">
            <header className="content__first_header">
                <h1>
                O café que fará seu código decolar para 
                o próximo nível.
                </h1>
                <Link to={"/menu"}><Button image={Vector} buttonText="pegar meu café" /></Link>
            </header>
        </section>

        <section className="content__second_section">
            <header className="content__second_header">
                <h2>
               Great Coffee
                </h2>
                <h2>
               &lt; Great Code {"/>"}
                </h2>
            </header>
            <img src={secondImgCoffee} alt="" />
        </section>

        </>
    )
}