import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { useContext } from "react";
import UserContext from "../context/userContext";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const Carousel = () => {
  const { userData } = useContext(UserContext);
  const data = userData.user.testimonials;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
  };
  return (
    <Slider {...settings}>
      {data.map((review, index) => (
        <div
          key={index}
          className="py-10 flex items-center justify-center px-20 lg:w-[30vw]"
        >
          <img src={review.image.url} alt="" className="w-20 center-image " />
          <p className="legend">{review.name}</p>
          <p className="legend">{review.position}</p>
          <p className="legend">{review.review}</p>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
