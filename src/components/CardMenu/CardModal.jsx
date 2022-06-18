import "./CardModal.css"
import { useSelector } from "react-redux";
import closeIcon from "./img/Close.svg"
import { useState, useEffect } from "react";

export function CardModal ({ buttonClose, products }) {

    const [currentProduct, setCurrentProduct] = useState({});
    console.log(currentProduct.productName)

    const state = useSelector(state => state)
    console.log("o produto selecionado é", state.selectedProduct)

    useEffect(() => {
        if(state.selectedProduct !== null) {
            const product = products.find(product => product._id === state.selectedProduct)
            setCurrentProduct(product)
            console.log("o produto atual é", currentProduct)
        }
    })

    return (
        <div className="card-menu__modal">
            <div className="card-menu__modal-content">
                {buttonClose}
               <h2>{currentProduct.productName !== undefined ? "Aqui está seu café" : "Seu café aparecerá aqui"}</h2>
               <p>{currentProduct.productName}</p>
               <p>{currentProduct.productDescription}</p>
               <img src={currentProduct.productImage} />
            </div>
        </div>
    )
}