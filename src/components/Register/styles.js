// styles.js

import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 10px 0;
  background-color: #008080;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #006666;
  }
`;

export const SwitchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  


`;

export const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 10px;
  text-align:center;
`;
