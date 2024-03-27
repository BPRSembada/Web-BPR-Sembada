import React from "react";
import "../../component/carousel/home_carousel.css";
import SelectorHome from "../Hero/Selector";

const HomeCarousel = () => {
  return (
    <div>
      <div className="cont_home_carousel">
        <div className="list">
          <div className="item">
            <img src="../heroImage/cover_baru.jpg" />
            <div className="content">
              {/* <div className="author">MUDAH</div> */}
              <div className="title">MUDAH</div>
              <div className="title">MURAH</div>
              <div className="topic">MENGUNTUNGKAN</div>
              <div className="des">
                Percayakan solusi keuangan Anda dengan cepat dan nyaman
              </div>
              <div className="buttons">
                <SelectorHome />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeCarousel;
