import { useState } from 'react';
import { Spin } from 'antd';
import { Button } from '../Button';
import { Navigate } from 'react-router-dom'

import "./SignIn.css";

export function SignIn() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [logged, setLogged] = useState(false);

    async function login(event) {
      event.preventDefault();
      const email = event.target.email.value
      const password = event.target.password.value
        setLoading(true);
        const URL = "https://backend-rocketcoffee.herokuapp.com/auth/signin";
        try {
            await fetch(URL, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                email: email,
                password: password
              }),
              credentials: "same-origin"
            })
            .then(res => res.json())
            .then(res => {
                if (res.token) {
                    localStorage.setItem("token", res.token);
                    localStorage.setItem("user", res.userID);
                    setLogged(true);
                }
              })
            } catch (error) {
            setError(true)
            console.log(error);
          }
        setLoading(false);
    }

    if(!error && logged) {
        return <Navigate to="/dashboard" />
    }
    
    return (
        <main className="signin__main">
            <h1>Faça login</h1>
            <div className="signin__form">
                <form action="#" onSubmit={login}>
                    <input onClick={() => {setError(false)}} type="email" placeholder="Email" name='email' />
                    <input onClick={() => {setError(false)}} type="password" placeholder="Senha" name='password' />
                    <Button className="signin__button" type="submit" buttonText={loading ? <Spin /> : "Entrar"} />
                    {error && <span>Credendicais inválidas</span>}
                </form>
            </div>
        </main>
    )
}