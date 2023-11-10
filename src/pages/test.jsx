import React from "react";
import "../css/test.css";
import { Carousel } from "react-bootstrap";
import { heroSlider } from "../database/heroSliderDatabase";
import SelectorHome from "../component/Hero/Selector";

const SliderTest = () => {
  return (
    <div>
      <div className="newHeroHome">
        <Carousel className="car-hero-new">
          {heroSlider.map((item, index) => {
            return (
              <Carousel.Item>
                <img src={item.img_url} alt="" className="img-car-new" />
                <Carousel.Caption>
                  <h3>{item.head_text}</h3>
                  <SelectorHome />
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default SliderTest;
