import styled from "styled-components";
import { FaTrash } from "react-icons/fa";

export const Tr = styled.tr`
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const TrashIcon = styled(FaTrash)`
  color: red;
  cursor: pointer;
  width: 18px;
  height: 18px;
`;
