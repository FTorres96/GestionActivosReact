import React from "react";
import styled from "styled-components";

const StyleHeader = styled.div`
  min-height: 3vh;
  padding: 2vh 3vh;
  box-shadow: 0 5px 10px rgba(130, 129, 129, 0.1);
`;
const Header = () => {
  return (
    <>
      <StyleHeader>
        <img src="/img/logoEntel.png" alt="Logo Entel" />
      </StyleHeader>
    </>
  );
};

export default Header;
