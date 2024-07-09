import React, { useState } from 'react';
import * as C from "./styles";

const Register = ({ onRegister, onShowLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setMessage('Por favor, preencha todos os campos.');
      return;
    }
    if (password !== confirmPassword) {
      setMessage('As senhas não coincidem.');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);
    if (userExists) {
      setMessage('Usuário já está cadastrado.');
      return;
    }
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    onRegister(email, password);
    setMessage('');
  };

  return (
    <div className="center-container">
      <C.Form onSubmit={handleSubmit}>
        <C.Title>Crie sua Conta</C.Title>
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
        <C.Input 
          type="password" 
          placeholder="Confirme sua Senha" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {message && <C.ErrorMessage>{message}</C.ErrorMessage>}
        <C.Button type="submit">Criar Conta</C.Button>
        <div className="button-container">
          <C.SwitchButton type="button" onClick={onShowLogin}>Login</C.SwitchButton>
        </div>
      </C.Form>
    </div>
  );
};

export default Register;
