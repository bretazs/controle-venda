import React from "react";
import ResumeItem from "../ResumeItem";
import * as C from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resume = ({ income, expense, total }) => {
  return (
    
    <C.Container>
      
      <ResumeItem
        title="Entradas"
        Icon={FaRegArrowAltCircleUp}
        value={income}
        color="#4CAF50" // Verde esmeralda
      />
      <ResumeItem
        title="Saídas"
        Icon={FaRegArrowAltCircleDown}
        value={expense}
        color="#F44336" // Vermelho carmim
      />
      <ResumeItem
        title="Total"
        Icon={FaDollarSign}
        value={total}
        color="#2196F3" // Azul real
      />
    </C.Container>
  );
};

export default Resume;
