import { DashboardContainer } from './CardDashboard.styled';
import { DashboardContentContainer } from './CardDashboard.styled';
import { DashboardContentContainerForm } from './CardDashboard.styled';
import { DashboardContentContainerFormLabel } from './CardDashboard.styled';
import { DashboardContentContainerFormLabelImg } from './CardDashboard.styled';
import { DashboardContentContainerFormInputOne } from './CardDashboard.styled';
import { DashboardContentContainerFormInputTwo } from './CardDashboard.styled';
import { DashboardContentContainerFormInputThree } from './CardDashboard.styled';

import { useState } from 'react';
import { InputNumber } from 'antd';
import { Button } from '../Button';
import { Spin } from 'antd';
import coffeeImage from "./img/coffee-placeholder.jpg"

export function ProductsAdd({ buttonClose }) {

    const [quantity, setQuantity] = useState(0);
    const [loading, setLoading] = useState(false);
    
    const [data, setData] = useState({
        name: "",
        image: ""
    });
    
    const [previewSource, setPreviewSource] = useState();
    
    const onChange = (value) => {
        setQuantity(value);
      };

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
        formData.append("productQuantity", quantity)

        const token = localStorage.getItem("token");
        const URL = "https://backend-rocketcoffee.herokuapp.com/products";
        try {
            await fetch(URL, {
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
        
        <DashboardContainer>
                <DashboardContentContainer>
                    {buttonClose}
                    <DashboardContentContainerForm onSubmit={(event) => createProduct(event)}>

                        <DashboardContentContainerFormLabel htmlFor="productImage">
                            <DashboardContentContainerFormLabelImg src={previewSource ? previewSource : coffeeImage} alt="coffee" />
                        </DashboardContentContainerFormLabel>

                        <DashboardContentContainerFormInputOne id="productImage" onChange={handleChange("image")} />
                        <DashboardContentContainerFormInputTwo placeholder="título" name="title" />
                        <DashboardContentContainerFormInputThree placeholder="descrição" name="description" />

                        <InputNumber min={0} max={100} onChange={onChange} />
                        <Button className="signin__button" type="submit" buttonText={loading ? <Spin /> : "Adicionar"} />

                    </DashboardContentContainerForm>
                </DashboardContentContainer>
            </DashboardContainer>
    )
}