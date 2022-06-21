import { ButtonStyled } from './Button.styles'
import { ButtonImageStyled } from './Button.styles'

export function Button({ event, buttonText, type, image, altImage, size }) {
    return (
        <ButtonStyled data-variant_size={size} type={type} onClick={event}>
            {buttonText}
            {
                image &&
                <ButtonImageStyled>
                    <img src={image} alt={altImage} />
                </ButtonImageStyled>
            }
            
        </ButtonStyled>
    )
}