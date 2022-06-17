import { CardMenu } from "./CardMenu"
import { useState, useEffect } from 'react';
import { Spin } from 'antd';

export function CardMenuContainer () {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

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
        </div>
    )
}