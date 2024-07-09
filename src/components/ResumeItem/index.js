import React from "react";
import * as C from "./styles";

const ResumeItem = ({ title, Icon, value, color }) => {
  return (
    <C.Container>
      <C.Title>{title}</C.Title>
      <Icon color={color} size={24} />
      <C.Value color={color}>{value}</C.Value>
    </C.Container>
  );
};

export default ResumeItem;
