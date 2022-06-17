export function OrderCard({ orderImage, orderTitle, orderDescription, orderQuantity, orderCreatedAt }) {
    return (
        <section className='dashboard__pedidos'>
            <div className='dashboard__pedidos__card'>
                <div className='dashboard__pedidos__left'>
                    <img src={orderImage} alt="" />
                    <div className="dashboard__left__text">
                        <h3>{orderTitle}</h3>
                        <p>{orderDescription}</p>
                    </div>
                </div>
                <div className="dashboard__pedidos__dados">
                    <span>Quantidade: {orderQuantity} </span>
                    <span>Feito em: {orderCreatedAt}</span>
                </div>
            </div>
        </section>
    )
}