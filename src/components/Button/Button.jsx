import './Button.css'
import Vector from './img/Vector.svg'

export function Button({ event, buttonText, type }) {
    return (
        <button onClick={event} type={type} className='button'> {buttonText} <img src={Vector} alt="" /></button>
    )
}