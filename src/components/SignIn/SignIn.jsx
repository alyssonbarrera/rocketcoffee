import { useState } from 'react';
import { Spin } from 'antd';
import { Button } from '../Button';
import "./SignIn.css";

export function SignIn() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    async function login(event) {
      event.preventDefault();
      const email = event.target.email.value
      const password = event.target.password.value
        setLoading(true);
        try {
            await fetch(`http://localhost:3030/auth/signin`, {
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
                }
                setError(true)
            })
          } catch (error) {
            console.log(error);
          }
        setLoading(false);
    }
    
    return (
        <main className="signin__main">
            <h1>Faça login</h1>
            <div className="signin__form">
                <form action="#" onSubmit={login}>
                    <input onClick={() => {setError(false)}} type="email" placeholder="Email" name='email' />
                    <input onClick={() => {setError(false)}} type="password" placeholder="Senha" name='password' />
                    <Button className="signin__button" type="submit" text={loading ? <Spin /> : "Entrar"} />
                    {error && <span>Credendicais inválidas</span>}
                </form>
            </div>
        </main>
    )
}