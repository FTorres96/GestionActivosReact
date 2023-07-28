import React from "react";
import { StyleBanner, BannerTexto} from "./style";

const Banner = (props) => {
  const { tituloBanner } = props;

  return (
    <StyleBanner>
      <BannerTexto>
        <h2><strong>{tituloBanner}</strong> de activos</h2>
      </BannerTexto>
      <img height={239} src={`/img/${tituloBanner}.svg`} alt={tituloBanner} />
    </StyleBanner>
  );
};

export default Banner;
