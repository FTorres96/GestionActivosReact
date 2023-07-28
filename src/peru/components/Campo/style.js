import styled from "styled-components";

export const ContenedorCampo = styled.div`
  margin: 16px 30px 0 0;
`;

export const Input = styled.input`
  display: block;
  width: 255px;
  height: 48px;
  border-radius: 6px;
  border: solid 1px #A4A4A6;
  padding: 0px 12px 0px 12px;
  outline-color: #0C0C0C;
  font-size: 18px;
  width: ${props => (props.placeholder === 'Ingresar Observaciones' ? '540px' : '254px')};
  :nth-child(){
    display: none;
  }
`;

