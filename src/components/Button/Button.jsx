import './Button.css'
import Vector from './img/Vector.svg'

export function Button({ buttonText, type, className }) {
    return (
        <button type={type} className={`button ${className}`}> {buttonText} <img src={Vector} alt="" /></button>
    )
}