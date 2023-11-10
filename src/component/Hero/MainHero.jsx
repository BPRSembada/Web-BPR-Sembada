import React from "react";

import "./MainHero.css";
import SelectorHome from "./Selector";

const MainHero = (props) => {
  const { head_text, img_url } = props.item;
  return (
    <div
      className="container-client-slider"
      style={{ backgroundImage: `url(${img_url})` }}
    >
      <div className="header-client-slider">
        <h1>{head_text}</h1>
        <SelectorHome />
      </div>
    </div>
  );
};

export default MainHero;
