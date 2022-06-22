import { ButtonStyled } from './Button.styles'
import { ButtonImageStyled } from './Button.styles'

export function Button({ event, disabled, buttonText, type, image, altImage, size }) {
    return (
        <ButtonStyled disabled={disabled} data-variant_size={size} type={type} onClick={event}>
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