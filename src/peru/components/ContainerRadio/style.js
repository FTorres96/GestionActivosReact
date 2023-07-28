import styled from "styled-components";

export const ContenedorRadio = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 24px;
  border: 1px solid #a4a4a6;
  height: 70px;
  width: 1110px;
  align-items: center;
  border-radius: 8px;
`;

// .container-radio
export const LabelRadio = styled.label`
  margin: 0 3rem;
  display: block;
  position: relative;
  padding-left: 23px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const InputRadio = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  :checked ~ .checkmark {
    background-color: #fff;
    :after {
      top: 3px;
      left: 3px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #002eff;
      display: block;
    }
  }
`;

export const HrRadio = styled.hr`
  color: black;
  width: 53px;
  transform: rotate(90deg);
`;
