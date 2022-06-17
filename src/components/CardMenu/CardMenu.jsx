import { useState } from 'react';
import "./CardMenu.css";
import { InputNumber } from 'antd';
import { Spin } from 'antd';

export function CardMenu ({ buttonText, id, title, description, productQuantity, image }) {

    const [quantity, setQuantity] = useState(0);
    const [productId, setProductId] = useState();
    const [loading, setLoading] = useState(false);
    const [receiveCoffee, setReceiveCoffee] = useState({});

    const onChange = (value) => {
        setQuantity(value);
      };

      console.log(productId)

      async function productEdit (event) {
        if(quantity > 0) {

            event.preventDefault()
            setLoading(true)
    
            await fetch(`http://localhost:3030/products/${productId}`, {
                method: "PUT",
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
                setProductId(0)
            })
            .catch(err => console.log(err))
            setLoading(false);
        } else {
            alert("Por favor, escolha uma quantidade válida")
        }
    }
    return (
        <>
            <div className="card-menu">
                <header className="card-menu__header">
                    <img src={image} alt="" />
                </header>
                
                <div onFocus={() => {setProductId(id)}} className="card-menu__content">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>Disponível: {productQuantity}</p>
                    <InputNumber min={0} max={productQuantity} defaultValue={1} onChange={onChange} />
                    <button type='submit' onClick={(event) => {productEdit(event)}} className="button card__button">{buttonText}</button>
                </div>
            </div>
        </>
    )
}