import './Button.css'
import Vector from './img/Vector.svg'

export function Button({ event, buttonText, type, especificClass }) {
    return (
        <button onClick={event} type={type} className={`button ${especificClass != undefined && especificClass}`}> {buttonText} <img src={Vector} alt="" /></button>
    )
}