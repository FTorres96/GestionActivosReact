import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyleHeader = styled.div`
  height: 88px;
  box-shadow: 0 5px 10px rgba(130, 129, 129, 0.1);
  margin-bottom: 29px;
`;

export const ContainerHeader = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.div`
display: flex;
align-items: center;
gap: 40px;
`
export const Links = styled(NavLink)`
  text-decoration: none;
  padding: 10px 16px;
  color: #002eff;
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  :hover {
    background-color: #f3f5ff;
    border-radius: 24px;
    gap: 8px;
  }
`;
