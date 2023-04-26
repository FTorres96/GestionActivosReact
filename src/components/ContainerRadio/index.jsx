import React from "react";
import styled from "styled-components";

const ContenedorRadio = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem 3rem;
  border: 1px solid black;
  padding: 2.75vh;
  border-radius: 10px;
`;
// .container-radio
const LabelRadio = styled.label`
  margin: 0 3.6rem;
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 0px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  // .container-radio .checkmark:after
  Span:after {
    /* top: 3px;
  left: 3px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: green; */
  }
`;

// .container-radio input
const InputRadio = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  // .container-radio input:checked ~ .checkmark
  :checked ~ SpanRadio {
    background-color: #002eff;
  }
  // .container-radio input:checked ~ .checkmark:after
  :after {
    display: block;
  }
`;

// .checkmark
const SpanRadio = styled.span`
  position: absolute;
  top: 0px;
  left: 0;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: 2px solid #002eff;
  :after {
    content: "";
    position: absolute;
    display: none;
  }
`;

const HrRadio = styled.hr``;

const ContainerRadio = () => {
  return (
    <>
      <ContenedorRadio>
        <LabelRadio>
          Ingreso de activos
          <InputRadio
            type="radio"
            name=""
            value=""
            // class="inputValidar"
            // checked
          />
          <SpanRadio></SpanRadio>
        </LabelRadio>
        <LabelRadio>
          Salida de activos
          <InputRadio
            type="radio"
            name=""
            value=""
            // class="inputValidar"
            // checked
          />
          <SpanRadio></SpanRadio>
        </LabelRadio>
        <HrRadio />
        <LabelRadio>
          Carga manual
          <InputRadio
            type="radio"
            name=""
            value=""
            // class="inputValidar"
            // checked
          />
          <SpanRadio></SpanRadio>
        </LabelRadio>
        <LabelRadio>
          Carga masiva
          <InputRadio
            type="radio"
            name=""
            value=""
            // class="inputValidar"
            // checked
          />
          <SpanRadio></SpanRadio>
        </LabelRadio>
      </ContenedorRadio>
    </>
  );
};

export default ContainerRadio;
