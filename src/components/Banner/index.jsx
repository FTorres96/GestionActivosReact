import React from "react";
import styled from "styled-components";

const StyleBanner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2rem;
`;

const Banner = () => {
  return (
    <>
      <StyleBanner>
        <img src="/img/banner.png" alt="Banner" />
      </StyleBanner>
    </>
  );
};

export default Banner;
