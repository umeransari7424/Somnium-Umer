import React from "react";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
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

const Hero = () => {
  return (
    <div className="hero">
      <div className="container-fluid text-center ">
        <div className="row ">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            interval={10000}
            infinite={true}
            rewind={true}
            // axis="horizontal"
            // labels={false}
            arrows={true}
            showDots={true}
            showStatus={false}
            showIndicators={true}
            infiniteLoop={true}
            showThumbs={false}
            // showThumbs={true}
            // onClickThumb={onClickThumb}
          >
            <div>
              <video
                src="Assets/AvatarsAnimation.mp4"
                className="img-fluid hero-video"
                loop
                autoPlay
                muted
              ></video>
            </div>
            <div>
              <video
                src="Assets/video22.mp4"
                className="img-fluid hero-video"
                loop
                autoPlay
                muted
              ></video>
            </div>
            <div>
              <video
                src="Assets/video33.mp4"
                className="img-fluid hero-video"
                loop
                autoPlay
                muted
              ></video>
            </div>
            <div>
              <video
                src="Assets/video44.mp4"
                className="img-fluid hero-video"
                // style={{width:"120%"}}

                loop
                autoPlay
                muted
              ></video>
            </div>
            <div>
              <video
                src="Assets/video66.mp4"
                className="img-fluid hero-video"
                loop
                autoPlay
                muted
              ></video>
            </div>
            <div>
              <video
                src="Assets/video77.mp4"
                className="img-fluid hero-video"
                loop
                autoPlay
                muted
              ></video>
            </div>
          </Carousel>
          <div className="unity">
            <div
              className="position-absolute"
              style={{ top: "1rem", right: "25px" }}
            >
              <img
                src="Assets/unity.png"
                alt="unity"
                className="img-fluid  "
                style={{ width: "200px" }}
              />
              <h3 style={{ color: "white" }}>Unity</h3>
            </div>
            <div
              className="position-absolute"
              style={{ top: "11rem", right: "20px" }}
            >
              <img
                src="Assets/virtual-reality.png"
                alt="unity"
                className="img-fluid  "
                style={{ width: "200px" }}
              />
              <h3 style={{ color: "white" }}>Virtual Reality</h3>
            </div>
            <div
              className="position-absolute"
              style={{ top: "25rem", right: "20px" }}
            >
              <img
                src="Assets/builder.png"
                alt="unity"
                className="img-fluid  "
                style={{ width: "200px" }}
              />
              <h3 style={{ color: "white" }}>Builder</h3>
            </div>
            <div
              className="position-absolute"
              style={{ top: "37rem", right: "20px" }}
            >
              <img
                src="Assets/heromarketplace.png"
                alt="unity"
                className="img-fluid  "
                style={{ width: "200px" }}
              />
              <h3 style={{ color: "white" }}>Marketplace</h3>
            </div>
          </div>
          {/* <div
            className=" position-absolute economy"
            style={{ top: "15rem", right:"0px", color: "white" }}
          >
            <div className="d-flex">
              <div>
                <img src="Assets/economy.png" alt="economy" />
              </div>
              <div className="text-start m-1">
                <img
                  src="Assets/paper.png"
                  className="img-fluid mt-1"
                  alt="paper"
                />{" "}
                <br />
                <button className="btn explore mt-3 "> Download</button>
              </div>
            </div>
          </div>
          <div
            className="position-absolute economy"
            style={{ top: "25rem", color: "white" }}
          >
            <div className="d-flex">
              <div>
                <img src="Assets/access.png" alt="economy" />
              </div>
              <div className="text-start m-1">
                <div className="access">
                  <h4>Access CUBEs</h4>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div
            className=" position-absolute economy"
            style={{ top: "31rem", left: "36rem", color: "white" }}
          >
           
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
