import './Button.css'
import Vector from './img/Vector.svg'

export function Button({ text, type, className }) {
    return (
        <button type={type} className={`button ${className}`}> {text} <img src={Vector} alt="" /></button>
    )
}