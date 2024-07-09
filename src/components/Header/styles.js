import styled from "styled-components";

export const Container = styled.div`
  height: 150px;
  text-align: center;
  background: teal;
`;

export const Header = styled.h1`
`;

export const Title = styled.div`
  padding-top: 20px;
  color: #fff;


`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: left;
  padding: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;