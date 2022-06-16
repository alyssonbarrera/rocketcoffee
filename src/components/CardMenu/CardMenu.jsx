
import "./CardMenu.css";

import coffee from "./img/coffee.jpg";

export function CardMenu ({ title, description, image }) {

    return (
        <>
            <div className="card-menu">
                <header className="card-menu__header">
                    <img src={image} alt="" />
                </header>
                
                <div className="card-menu__content">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <button className="button card__button">Selecionar café</button>
                </div>
            </div>
        </>
    )
}