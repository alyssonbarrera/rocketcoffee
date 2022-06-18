import "./CardModal.css"
import { useDispatch, useSelector } from "react-redux";
import { cardModalOpen } from "../../redux/action";
import { Button } from "../Button"
import closeIcon from "./img/Close.svg"
import { useState, useEffect } from "react";

export function CardModal ({products}) {

    const [currentProduct, setCurrentProduct] = useState({});

    console.log(products)
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    console.log("no modal", state)

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
                <button><img src={closeIcon} alt="fechar modal" /></button>
               <h2>{state.selectedProduct != null ? "Aqui está seu café" : "Seu café aparecerá aqui"}</h2>
               <p>{currentProduct.productName}</p>
               <p>{currentProduct.productDescription}</p>
               <img src={currentProduct.productImage} />
            </div>
        </div>
    )
}