import "../css/home.css";
// import TestiSlider from "../component/testiSlider";
import MainHeroContainer from "../component/Hero/MainHeroContainer";
import EmpatKeunggulan from "../component/EmpatKeunggulan/EmpatKeunggulan";
import SliderTest from "./test";

const Home = () => {
  return (
    <div>
      <div className="cont-hero-home">
        {/* <MainHeroContainer /> */}

        <SliderTest />
      </div>
      <div className="card-testimonial">
        <EmpatKeunggulan />
      </div>
    </div>
  );
};
export default Home;
