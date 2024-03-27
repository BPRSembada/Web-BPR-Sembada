import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import HomeCarousel from "../home_carousel";

// react icon
import {
  FaRegArrowAltCircleRight,
  FaRegArrowAltCircleLeft,
} from "react-icons/fa";
// my css
import "../sweeper/sweeper.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

export default function SwiperTest() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper main-swp"
      >
        <SwiperSlide>
          <HomeCarousel />
        </SwiperSlide>
        <SwiperSlide>
          <HomeCarousel />
        </SwiperSlide>
        <SwiperSlide>
          <HomeCarousel />
        </SwiperSlide>
        <SwiperSlide>
          <HomeCarousel />
        </SwiperSlide>
        <div className="btn-swp">
          <div className="button-prev-slide">
            <FaRegArrowAltCircleLeft className="icon-swp" />
          </div>
          <div className="button-next-slide">
            <FaRegArrowAltCircleRight className="icon-swp" />
          </div>
        </div>
      </Swiper>
    </>
  );
}

const container_swiper = {
  color: "red",
  height: "30vh",
  width: "100vw",
  backgroundColor: "green",
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
};
