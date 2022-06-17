import { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { CardMenu } from "../CardMenu/CardMenu"
import { ProductsAdd } from './ProductsAdd';
import { OrderCard } from './OrderCard';

import coffee from "./img/coffee-placeholder.jpg"
import "./Dashboard.css";

export function Dashboard () {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [openAddProduct, setOpenAddProduct] = useState(false);
    const [product, setProduct] = useState({});
    const [selectedProducts, setSelectedProducts] = useState(false);
    const [selectedOrders, setSelectedOrders] = useState(false);
    const [orders, setOrders] = useState({});


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

    useEffect(() => {
        setLoading(true);

        const token = localStorage.getItem("token");
        fetch(`http://localhost:3030/orders`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            credentials: 'same-origin'
        })
        .then(res => res.json())
        .then(res => {
            setOrders(res)
            setLoading(false);
        })
    }, [])

    const userID = localStorage.getItem("user");

    useEffect(() => {
        fetch(`http://localhost:3030/auth/user/${userID}`)
        .then(res => res.json())
        .then(res => setUser(res))
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        fetch(`http://localhost:3030/products`)
        .then(res => res.json())
        .then(res => setProduct(res))
    }, [])


    return (
        <>
            <header className="dashboard__header">
                <div className="dashboard__info">
                    <h1>Dashboard</h1>
                    <div className="dashboard__user">
                        <p>{user.name}</p>
                        <img src={user.avatar} alt="" />
                    </div>
                </div>
            </header>
            <main className='dashboard__main'>
                <nav className='dashboard__main__nav'>
                <button onClick={() => {
                    !openAddProduct 
                    ? setOpenAddProduct(true)
                    : setOpenAddProduct(false); setSelectedProducts(false); setSelectedOrders(false)
                    }}
                    >{openAddProduct ? "-" : "+"}</button>
                    
                    <ul>
                        <li onClick={() => {
                            !selectedProducts 
                            ? setSelectedProducts(true) 
                            : setSelectedProducts(false); setSelectedOrders(false); setOpenAddProduct(false)
                            }}
                            >Produtos</li>
                            
                        <li onClick={() => {
                            !selectedOrders ? setSelectedOrders(true) : setSelectedOrders(false); setSelectedProducts(false); setOpenAddProduct(false)
                            }}
                            >Pedidos</li>
                    </ul>
                </nav>
                {
                    openAddProduct && 
                        <ProductsAdd />
                }
                
                    
                { selectedProducts && 
                <section className='dashboard__produtos'>
                    {loading ? <Spin /> :
                    product.map((product) => 
                            <CardMenu
                                key={product._id}
                                id={product._id}
                                title={product.productName}
                                description={product.productDescription}
                                productQuantity={product.productQuantity}
                                image={product.productImage}
                                buttonText="Editar"
                            />
                    )
                    }
                </section>
                }
                { selectedOrders && 
                    orders.map((order) =>{
                        return <OrderCard key={order._id}
                        orderImage={order.productImage}
                        orderTitle={order.productName}
                        orderDescription={order.productDescription}
                        orderQuantity={order.productQuantity}
                        orderCreatedAt={order.createdAt}
                        />
                    }).reverse()
                }
                {
                    !selectedProducts && !selectedOrders && !openAddProduct && 
                    <section className='dashboard__empty'>
                        <h2>Selecione uma opção para visualizar</h2>
                    </section>
                }
            </main>
        </>
    )
}