import { useState, useEffect } from 'react';
import { Spin } from 'antd';
import { Button } from '../Button';

import "./Dashboard.css";
import coffeeImage from "./img/coffee-placeholder.jpg"

export function Dashboard () {

    const [user, setUser] = useState({});
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState({
        name: "",
        image: ""
      });
    const [image, setImage] = useState();

    const [previewSource, setPreviewSource] = useState();

    const handleChange = (name) => (e) => {
      const value = name === "image" ? e.target.files[0] : e.target.value;
      previewFile(value);
      setData({ ...data, [name]: value });
    };
      
    const previewFile = (file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPreviewSource(reader.result);
      }
    }

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
        .then(res => setProducts(res))
    }, [])

    async function createProduct (event) {
        event.preventDefault()
        setLoading(true)
        
        const productImage = data.image
        const productTitle = event.target.title.value
        const productDescription = event.target.description.value

        const formData = new FormData();

        formData.append("image", productImage)
        formData.append("productName", productTitle)
        formData.append("productDescription", productDescription)

        const token = localStorage.getItem("token");
        try {
            await fetch(`http://localhost:3030/products`, {
                method: "POST",
                body: formData,
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                Credentials: "same-origin"
            })
            .then(res => res.json())
            .then(res => {
                console.log(res)
            })
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

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
                    <ul>
                        <li>Produtos</li>
                        <li>Pedidos</li>
                    </ul>
                </nav>
                <section className='dashboard__products--add'>
                    <div>
                        <form action="" onSubmit={(event) => createProduct(event)}>
                            <label htmlFor="productImage"><img src={previewSource ? previewSource : coffeeImage} alt="" /></label>
                            <input type="file" id='productImage' onChange={handleChange("image")} accept="image" />
                            <input type="text" placeholder='título' name='title' />
                            <input type="text" placeholder='descrição' name='description' />
                            <Button className="signin__button" type="submit" text={loading ? <Spin /> : "Adicionar"} />
                        </form>
                    </div>
                </section>
                <section className='dashboard__produtos'>
                </section>
            </main>
        </>
    )
}