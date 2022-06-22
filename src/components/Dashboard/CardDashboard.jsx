import { useState } from 'react';

import { DashboardContainer } from './CardDashboard.styled';
import { DashboardContentContainer } from './CardDashboard.styled';
import { DashboardContentContainerForm } from './CardDashboard.styled';
import { DashboardContentContainerFormLabel } from './CardDashboard.styled';
import { DashboardContentContainerFormLabelImg } from './CardDashboard.styled';
import { DashboardContentContainerFormInputOne } from './CardDashboard.styled';
import { DashboardContentContainerFormInputTwo } from './CardDashboard.styled';
import { DashboardContentContainerFormInputThree } from './CardDashboard.styled';

import { InputNumber, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../../redux/action';
import coffeeImage from "./img/coffee-placeholder.jpg"
import { Button } from '../Button';

export function CardDashboard ({ buttonClose, buttonText, id, productImage, productTitle, productDescription, productQuantity, image }) {
    
    const [data, setData] = useState({
        name: "",
        image: ""
    });
    
    const [previewSource, setPreviewSource] = useState();
    const [sucessMessage, setSucessMessage] = useState(false);

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

    const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(0);
    const [productId, setProductId] = useState();
    const [loading, setLoading] = useState(false);
    const [afterQuantity, setAfterQuantity] = useState(0);

    const onChange = (value) => {
        setQuantity(value);
      };

  const token = localStorage.getItem("token");

  async function productEdit (event) {
    event.preventDefault()

    const productImage = data.image
    const productTitle = event.target.productTitle.value
    const productDescription = event.target.productDescription.value

    const formData = new FormData();

    formData.append("image", productImage)
    formData.append("productName", productTitle)
    formData.append("productDescription", productDescription)
    formData.append("productQuantity", quantity)

    if(quantity > 0) {
        setLoading(true)
        const URL = `https://backend-rocketcoffee.herokuapp.com/products/${id}`;
        await fetch(URL, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            body: formData
        })
        .then(res => res.json())
        .then(res => {
            setAfterQuantity(res.currentQuantity)
        })
        .catch(err => console.log(err))
        setLoading(false);
        setSucessMessage(true);
    } else {
        alert("Por favor, preencha todos os campos")
    }
  }
  
    const buttonMessage = () => {
        if(loading) return <Spin />
        if(sucessMessage) return "Produto atualizado com sucesso!"
        return "Editar"
    }

    return (
        <>
            <DashboardContainer>
                <DashboardContentContainer>
                    {buttonClose}
                    <DashboardContentContainerForm onSubmit={(event) => productEdit(event)}>

                        <DashboardContentContainerFormLabel htmlFor="productImage">
                            <DashboardContentContainerFormLabelImg src={productImage ? productImage : coffeeImage} alt="coffee" />
                        </DashboardContentContainerFormLabel>

                        <DashboardContentContainerFormInputOne id="productImage" onChange={handleChange("image")} />
                        <DashboardContentContainerFormInputTwo placeholder="título" defaultValue={productTitle} name="productTitle" />
                        <DashboardContentContainerFormInputThree placeholder="descrição" defaultValue={productDescription} name="productDescription" />

                        <InputNumber min={0} max={100} onChange={onChange} defaultValue={productQuantity} />
                        <Button className="signin__button" type="submit" buttonText={buttonMessage()} />

                    </DashboardContentContainerForm>
                </DashboardContentContainer>
            </DashboardContainer>

        </>
    )
}