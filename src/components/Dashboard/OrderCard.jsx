import { OrderCardContainer } from './OrderCard.styled'
import { OrderCardContent } from './OrderCard.styled'
import { OrderCardContentLeft } from './OrderCard.styled'
import { OrderCardContentLeftImg } from './OrderCard.styled'
import { OrderCardContentLeftText } from './OrderCard.styled'
import { OrderCardContentLeftTextTitle } from './OrderCard.styled'
import { OrderCardContentLeftTextParagraph } from './OrderCard.styled'
import { OrderCardContentRight } from './OrderCard.styled'
import { OrderCardContentRightText } from './OrderCard.styled'
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

export function OrderCard({ orderImage, orderTitle, orderDescription, orderQuantity, orderCreatedAt }) {

    const formattedDate = format(orderCreatedAt, " d ' de ' MMMM ' • ' k'h'mm", { locale: ptBR });
    
    return (

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
                        Feito em: {formattedDate}
                    </OrderCardContentRightText>

                </OrderCardContentRight>
            </OrderCardContent>
       
    )
}