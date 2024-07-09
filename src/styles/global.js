import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }

  body {
    background-color: #f5f5f5;
    color: #333;
  }

  button {
    border: none;
    cursor: pointer;
  }

  input {
    outline: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header {
    width: 100%;
    background-color: #008080;
    color: #fff;
    text-align: center;
    padding: 20px 0;
    font-size: 24px;
  }

  .stats {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin: 20px 0;
    flex-wrap: wrap;
  }

  .stats .stat {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    margin: 10px;
    flex: 1;
    min-width: 150px;
    text-align: center;
  }

  .form {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 20px 0;
  }

  .form input {
    flex: 1;
    margin: 10px;
    padding: 10px;
    font-size: 16px;
  }

  .form .button-container {
    display: flex;
    align-items: center;
  }

  .form .button-container button {
    padding: 10px 20px;
    font-size: 16px;
    margin: 10px;
  }

  .table {
    width: 100%;
    margin-top: 20px;
  }

  .table table {
    width: 100%;
    border-collapse: collapse;
  }

  .table th, .table td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
  }

  .table th {
    background-color: #f4f4f4;
  }

  .logout-button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 10px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
 .center-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;


export default GlobalStyle;
