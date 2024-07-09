import React, { useState } from 'react';
import * as C from "./styles";

const Login = ({ onLogin, onShowRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage('Por favor, preencha todos os campos.');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      onLogin(email, password);
      setMessage('');
    } else {
      setMessage('Dados inválidos');
    }
  };

  return (
    <div className="center-container">
      <C.Form onSubmit={handleSubmit}>
        <C.Title>Login</C.Title>
        <C.Input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <C.Input 
          type="password" 
          placeholder="Senha" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         {message && <C.ErrorMessage>{message}</C.ErrorMessage>}
        <C.Button type="submit">Login</C.Button>
        <div className="button-container">
          <button type="button" onClick={onShowRegister}>Criar Conta</button>
        </div>
      </C.Form>
    </div>
  );
};

export default Login;
