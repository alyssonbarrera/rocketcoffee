import { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { CardMenu } from "../CardMenu/CardMenu"
import { ProductsAdd } from './ProductsAdd';
import { OrderCard } from './OrderCard';
import { useSelector } from 'react-redux';
import { CardDashboard } from './CardDashboard';
import { Card } from '../Card'
import { Button } from '../Button'
import "./Dashboard.css";
import closeIcon from "./img/Close.svg"


export function Dashboard () {

    const state = useSelector(state => state)
    console.log(state)

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [openAddProduct, setOpenAddProduct] = useState(false);
    const [product, setProduct] = useState({});
    const [selectedProducts, setSelectedProducts] = useState(false);
    const [selectedOrders, setSelectedOrders] = useState(false);
    const [orders, setOrders] = useState({});
    const [productId, setProductId] = useState(0);
    const [openEditProduct, setOpenEditProduct] = useState(false);
    const [infoSelectedProduct, setInfoSelectedProduct] = useState({});

    

    console.log(productId)

    useEffect(() => {
        const userID = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        fetch(`http://localhost:3030/auth/user/${userID}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            credentials: 'same-origin'
        })
        .then(res => res.json())
        .then(res => {
            setUser(res)
        })
    }, []);

    const getOrders = () => {
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
    }

    // useEffect(() => {
    //     const interval = setInterval(()=> getOrders(), 1000)
    //     return () => clearInterval(interval);
    // }, [])

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
        if(state.selectedProduct !== null){
        const filterSelectedProduct = product.filter(product => product._id === state.selectedProduct)
        setInfoSelectedProduct(filterSelectedProduct[0])
        }
    })

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
                        <Card
                            key={product._id}
                            id={product._id}
                            title={product.productName}
                            description={product.productDescription}
                            productQuantity={product.productQuantity}
                            image={product.productImage}
                            maxNumber={product.productQuantity}
                            buttonText="Editar"
                            button={<Button event={() => {setOpenEditProduct(true)}} buttonText={"editar"} />}
                        />
                )
                }
                </section>
                }
                { selectedOrders && orders.length != undefined && 
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
                { openEditProduct &&
                    <CardDashboard
                    buttonClose={<button onClick={() => setOpenEditProduct(false)} className='add__button'><img src={closeIcon} alt="" /></button>}
                    id={state.selectedProduct} />
                }
                    </main>
        </>
    )
}