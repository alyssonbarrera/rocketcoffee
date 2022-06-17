import './Button.css'
import Vector from './img/Vector.svg'

export function Button({ buttonText, type }) {
    return (
        <button type={type} className='button'> {buttonText} <img src={Vector} alt="" /></button>
    )
}