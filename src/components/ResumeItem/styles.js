import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
   padding: 10px;
`;

export const Value = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.color || "black"}; 
   padding: 10px;
`;

export const IconContainer = styled.div`
  color: ${(props) => props.color || "black"}; 
   padding: 10px;
  size: 24px;
`;
