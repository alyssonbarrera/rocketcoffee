import { CardMenu } from "./CardMenu"
import { CardModal } from "./CardModal"
import { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from "../../redux/action";
import closeIcon from "./img/Close.svg"

export function CardMenuContainer () {

    const dispatch = useDispatch()
    const state = useSelector(state => state)
    console.log(state)

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    const [cardModalOpen, setCardModalOpen] = useState(false);

    useEffect(() => {

        const userID = localStorage.getItem("user");

        fetch(`http://localhost:3030/products`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${userID}`
            },
            credentials: 'same-origin'
        })
        .then(res => res.json())
        .then(res => {
            setProduct(res)
            setLoading(false);
        })
        .catch(err => console.log(err))

    }, [])

    console.log(product)

    return (
        <div className="card-menu__container">

            {loading ? <Spin /> :
                product.map((product) => 
                        <CardMenu
                            key={product._id}
                            id={product._id}
                            title={product.productName}
                            description={product.productDescription}
                            productQuantity={product.productQuantity}
                            image={product.productImage}
                            buttonText="Selecionar café"
                        />
                )
            }
             {
                state.selectedProduct && <CardModal buttonClose={<button onClick={() => dispatch(selectedProduct(0))} className='add__button'><img src={closeIcon} alt="" /></button>} products={product} />
             }
        </div>
    )
}