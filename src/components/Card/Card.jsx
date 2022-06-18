import { InputNumber } from 'antd';
import { Button } from '../Button';
import './Card.css';
import { useState } from 'react';
import { selectedProduct } from '../../redux/action';
import { useDispatch, useSelector } from 'react-redux';

export function Card({ button, buttonText, id, thisId, title, description, productQuantity, image, maxNumber }) {

    const dispatch = useDispatch()
    const state = useSelector(state => state)
    console.log(state)

    const [quantity, setQuantity] = useState(0);

    const onChange = (value) => {
        setQuantity(value);
      };
      console.log(quantity)

    return(
        <>
            <div className="card-menu">
                <header className="card-menu__header">
                    <img src={image} alt="" />
                </header>
                
                <div onFocus={() =>dispatch(selectedProduct(id))} className="card-menu__content">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>{productQuantity}</p>
                    <InputNumber min={0} max={maxNumber} defaultValue={0} placeholder="0" onChange={(event) => {onChange(event)}} />
                    {button}
                </div>
            </div>
        </>
    )
}