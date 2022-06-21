import { useState } from 'react';
import { InputNumber, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../../redux/action';
import { Card } from '../Card'
import { Button } from '../Button';

export function CardMenu ({ buttonText, id, title, description, productQuantity, image }) {

    const dispatch = useDispatch()
    const state = useSelector(state => state)

    const [quantity, setQuantity] = useState(0);
    const [productId, setProductId] = useState();
    const [loading, setLoading] = useState(false);
    const [afterQuantity, setAfterQuantity] = useState(0);
    const [value, setValue] = useState('0');

    console.log(quantity)
    const onChange = (value) => {
        setQuantity(value);
      };

      async function productEdit (event) {

          if(quantity > 0) {

            dispatch(selectedProduct(productId))

            event.preventDefault()
            setLoading(true)

            const URL = `https://backend-rocketcoffee.herokuapp.com/products/${productId}`
    
            await fetch(URL, {
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

    console.log(productId)

    return (
        <Card
            event={
                () => setProductId(id)
            }
            key={id}
            id={id}
            title={title}
            description={description}
            productQuantity={afterQuantity != 0 ? afterQuantity : productQuantity}
            image={image}
            button={
                <Button
                event={
                    (event) => {productEdit(event); setValue(0)}
                }
                buttonText={"Selecionar café"}
                />
            }
            inputNumber={
            <InputNumber
            min={0}
            max={
                afterQuantity != 0
                ? afterQuantity
                : productQuantity
            }
            value={value}
            onChange={
                (event) => {onChange(event); setValue()}
            } 
            
            />
        }
        />
    )
}