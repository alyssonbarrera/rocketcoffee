import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { CardMenuModal } from "./CardModal.styled";
import { CardMenuModalContent } from "./CardModal.styled";
import { CardMenuModalContentTitle } from "./CardModal.styled";
import { CardMenuModalContentParagraphOne } from "./CardModal.styled";
import { CardMenuModalContentParagraphTwo } from "./CardModal.styled";
import { CardMenuModalContentImg } from "./CardModal.styled";

export function CardModal ({ buttonClose, products }) {

    const [currentProduct, setCurrentProduct] = useState({});

    const state = useSelector(state => state)

    useEffect(() => {
        if(state.selectedProduct !== null) {
            const product = products.find(product => product._id === state.selectedProduct)
            setCurrentProduct(product)
        }
    })

    return (

        <CardMenuModal>
            <CardMenuModalContent>
                {buttonClose}
                <CardMenuModalContentTitle>
                    {currentProduct.productName !== undefined ? "Aqui está seu café" : "Seu café aparecerá aqui"}
                </CardMenuModalContentTitle>
                <CardMenuModalContentParagraphOne>
                    {currentProduct.productName}
                </CardMenuModalContentParagraphOne>
                <CardMenuModalContentParagraphTwo>
                    {currentProduct.productDescription}
                </CardMenuModalContentParagraphTwo>
                <CardMenuModalContentImg src={currentProduct.productImage} />
            </CardMenuModalContent>
        </CardMenuModal>

    )
}