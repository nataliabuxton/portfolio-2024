// Portfolio.jsx
import React from "react";
import Slider from "react-slick";
import "./portfolio.scss";

const items = [
  // Your items array
];

const Single = ({ item }) => {
  return (
    <div className="portfolio-item">
      <h2>{item.title}</h2>
      <img src={item.img} alt={item.title} />
      <p>{item.desc}</p>
    </div>
  );
};

const Portfolio = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="portfolio">
      <div className="progress">
        <h1>Featured works</h1>
      </div>
      <Slider {...sliderSettings} className="portfolio-slider">
        {items.map((item) => (
          <Single item={item} key={item.id} />
        ))}
      </Slider>
    </div>
  );
};

export default Portfolio;
