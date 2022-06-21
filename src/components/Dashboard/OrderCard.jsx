import { OrderCardContainer } from './OrderCard.styled'
import { OrderCardContent } from './OrderCard.styled'
import { OrderCardContentLeft } from './OrderCard.styled'
import { OrderCardContentLeftImg } from './OrderCard.styled'
import { OrderCardContentLeftText } from './OrderCard.styled'
import { OrderCardContentLeftTextTitle } from './OrderCard.styled'
import { OrderCardContentLeftTextParagraph } from './OrderCard.styled'
import { OrderCardContentRight } from './OrderCard.styled'
import { OrderCardContentRightText } from './OrderCard.styled'

export function OrderCard({ orderImage, orderTitle, orderDescription, orderQuantity, orderCreatedAt }) {
    return (

        <OrderCardContainer>
            <OrderCardContent>
                <OrderCardContentLeft>
                    
                    <OrderCardContentLeftImg src={orderImage} />

                    <OrderCardContentLeftText>
                        <OrderCardContentLeftTextTitle>
                            {orderTitle}
                        </OrderCardContentLeftTextTitle>

                        <OrderCardContentLeftTextParagraph>
                            {orderDescription}
                        </OrderCardContentLeftTextParagraph>
                    </OrderCardContentLeftText>

                </OrderCardContentLeft>

                <OrderCardContentRight>

                    <OrderCardContentRightText>
                        Quantidade: {orderQuantity}
                    </OrderCardContentRightText>

                    <OrderCardContentRightText>
                        Feito em: {orderCreatedAt}
                    </OrderCardContentRightText>

                </OrderCardContentRight>
            </OrderCardContent>
        </OrderCardContainer>
       
    )
}