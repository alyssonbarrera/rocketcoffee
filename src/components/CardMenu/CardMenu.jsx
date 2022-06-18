import { useState } from 'react';
import "./CardMenu.css";
import { InputNumber, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../../redux/action';

export function CardMenu ({ buttonText, id, title, description, productQuantity, image }) {

    const dispatch = useDispatch()
    const state = useSelector(state => state)
    console.log(state)

    const [quantity, setQuantity] = useState(0);
    const [productId, setProductId] = useState();
    const [loading, setLoading] = useState(false);
    const [afterQuantity, setAfterQuantity] = useState(0);

    const onChange = (value) => {
        setQuantity(value);
      };

      console.log(productId)

      async function productEdit (event) {

        dispatch(selectedProduct(productId))

        if(quantity > 0) {

            event.preventDefault()
            setLoading(true)
    
            await fetch(`http://localhost:3030/products/${productId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    productQuantity: quantity
                })
            })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setAfterQuantity(res.currentQuantity)
            })
            .catch(err => console.log(err))
            setLoading(false);
        } else {
            alert("Por favor, escolha uma quantidade válida")
        }
    }

    console.log(afterQuantity)
    return (
        <>
            <div className="card-menu">
                <header className="card-menu__header">
                    <img src={image} alt="" />
                </header>
                
                <div onFocus={() => {setProductId(id)}} className="card-menu__content">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>Disponível: {afterQuantity != 0 ? afterQuantity : productQuantity}</p>
                    <InputNumber name='inputNumber' min={0} max={afterQuantity != 0 ? afterQuantity : productQuantity} defaultValue={0} placeholder="0" onChange={onChange} />
                    <button type='submit' onClick={(event) => {productEdit(event)}} className="button card__button">{loading ? <Spin /> : buttonText}</button>
                </div>
            </div>
        </>
    )
}