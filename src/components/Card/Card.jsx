import { CardStyled } from "./Card.styles"
import { CardHeaderStyled } from "./Card.styles"
import { CardContentStyled } from "./Card.styles"
import { CardHeaderImgStyled } from "./Card.styles"
import { CardContentTitleStyled } from "./Card.styles"
import { CardContentParagraphStyled } from "./Card.styles"

import { InputNumber } from 'antd';
import { Button } from '../Button';
import { useState } from 'react';
import { selectedProduct } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';

export function Card({ inputNumber, event, button, buttonText, id, thisId, title, description, productQuantity, image, maxNumber }) {

    const dispatch = useDispatch()
    const state = useSelector(state => state)
    console.log(state)

    const [quantity, setQuantity] = useState(0);

    const onChange = (value) => {
        setQuantity(value);
      };
      console.log(quantity)

    return(
        <CardStyled>

            <CardHeaderStyled>
                <CardHeaderImgStyled src={image} alt="café com leite" />
            </CardHeaderStyled>

            <CardContentStyled onFocus={event}>
                <CardContentTitleStyled>
                    {title}
                </CardContentTitleStyled>

                <CardContentParagraphStyled>
                    {description}
                </CardContentParagraphStyled>

                <CardContentParagraphStyled>
                    {productQuantity}
                </CardContentParagraphStyled>

                {inputNumber}
                {button}
                
            </CardContentStyled>

        </CardStyled>
    )
}