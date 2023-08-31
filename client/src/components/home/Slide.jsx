import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, Divider } from "@mui/material";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slide = ({ title, timer, products, id }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
        {hours} : {minutes} : {seconds} Left
      </Box>
    );
  };
  return (
    <Box style={{ background: "white", marginTop: 10, margin: "1%" }} id={id}>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#D3D3D3",
        }}
      >
        <Box style={{ fontSize: 16, fontWeight: 700, padding: 18 }}>
          {title}
        </Box>
        {timer && (
          <Box style={{ display: "flex", alignItems: "centre" }}>
            <img
              src={timerURL}
              style={{ width: 24, marginRight: 20 }}
              alt="time clock"
            />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Box>
        )}
      </Box>

      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        slidesToSlide={1}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        centerMode={true}
      >
        {Object.keys(products).length > 0 &&
          products.map((product) => {
            return (
              <Box>
                <Link
                  to={`product/${product.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Box textAlign="center" style={{ padding: "25px 15px" }}>
                    <img
                      src={product?.url}
                      alt=""
                      style={{ width: "auto", height: 150 }}
                    />
                    <Typography style={{ fontWeight: 600, color: "#212121" }}>
                      {product?.title?.shortTitle}
                    </Typography>
                    <Typography style={{ color: "green" }}>
                      {product?.discount}
                    </Typography>
                    <Typography style={{ color: "#212121", opacity: ".6" }}>
                      {product?.tagline}
                    </Typography>
                  </Box>
                </Link>
              </Box>
            );
          })}
      </Carousel>
    </Box>
  );
};

export default Slide;
