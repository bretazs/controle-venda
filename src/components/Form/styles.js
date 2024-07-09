import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  width: 98%;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
  gap: 10px;

  @media (max-width: 750px) {
    display: grid;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 15px;
  border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;

  input[type="radio"] {
    display: none;
  }

  label {
    display: inline-block;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    padding-inline: 20px; /* Espaçamento entre radio button e label */
  }

  input[type="radio"]:checked + label {
    color: white;
    background-color: ${(props) => (props.isIncome ? "green" : "red")};
  }

  input[type="radio"]:not(:checked) + label {
    color: black;
    background-color: #f0f0f0;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  background-color: teal;
`;
