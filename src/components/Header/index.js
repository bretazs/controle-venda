// src/components/Header/index.js
import React from "react";
import * as C from "./styles";
 

const Header = ({ onLogout }) => {
  return (
    <C.Container>
      <C.Header>
        <C.Title>Controle Financeiro</C.Title>
      </C.Header>
    </C.Container>
  );
};

export default Header;
