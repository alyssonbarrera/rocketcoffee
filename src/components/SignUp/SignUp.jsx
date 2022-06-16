import { useState } from 'react';
import { Spin } from 'antd';
import { Button } from '../Button';
import "./SignUp.css";
import userImage from "./img/user-placeholder.png"

export function SignUp() {

    const [data, setData] = useState({
        name: "",
        image: ""
      });
      const [image, setImage] = useState();
    
      const [previewSource, setPreviewSource] = useState();
      const [loading, setLoading] = useState(false);
    
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
        }	// reader.onloadend
      }

      let formData = new FormData();
      
    async function handleSubmit (event) {
        setLoading(true);
        event.preventDefault();
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value
        console.log(name)

        console.log(data.image)
        formData.append("image", data.image);  
        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);

        try {
            await fetch(`http://localhost:3030/auth/signup`, {
              method: "POST",
              body: formData
            })
            .then(res => res.json())
            .then(res => console.log(res))
          } catch (error) {
            console.log(error);
          }
        setLoading(false);
        };
    
    return (
        <main className="signin__main">
            <div className="signin__form">
                <form action="#" onSubmit={(event) => handleSubmit(event)}>
                    <label htmlFor="avatar"><img src={previewSource ? previewSource : userImage} alt="" /></label>
                    <input accept="image/" type="file" id="avatar" onChange={handleChange("image")} />
                    <input type="text" placeholder="Nome" name='name'/>
                    <input type="email" placeholder="Email" name='email' />
                    <input type="password" placeholder="Senha" name='password' />
                    <Button className="signin__button" type="submit" text={loading ? <Spin /> : "Registrar"} />
                </form>
            </div>
        </main>
    )
}