import React from "react";

const Virtual = () => {
  return (
    <div className="virtual">
      <div className="container-fluid text-center py-5">
        <div className="row py-3">
          <h4>SOMNIUM SPACE IS A</h4>
          <h1>VIRTUAL REALITY WORLD</h1>
          <h4>Open, Social & Persistent</h4>
        </div>

        <div className="row py-5 ">
          <div className="col-md-3 text-end py-3 p-3">
            <div>
              <h5>
                We are creating an Open, Social, Virtual Reality world. A world
                with its own economy and its own currency. A VR world with its
                own Marketplace, Games, Social experiences and Virtual Land
                ownership.
              </h5>
            </div>
            <div>
              <img
                src="Assets/chat.png"
                className="img-fluid chatimg "
                alt="pc chat"
              />
            </div>
            <div >
              <h5 className="py-3">
                Chat, Build, <br />
                Trade in dedicated Somnium PC client
              </h5>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="Assets/pcvr.png"
              className="img-fluid position-relative"

              alt="pc vr"
            />
            <p>PC VR Mode</p>
            <p>Live Inside Somnium World</p>
          </div>

          <div className="col-md-3 text-start py-5 p-3">
            <div>
              <h5>
                A VR world which is fully interconnected and seamless. Fully
                accessible from any device: PC & VR clients for user's Desktop
                or an immersive VR experience on mobile devices.
              </h5>
            </div>
            <div>
              <img
                src="Assets/vr.png"
                className="img-fluid chatimg"
                alt="pc chat"
              />
              <h4 className="text-center py-3">
                Oculus Quest <br /> Compatible
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="available">
        <div className="container  py-3">
          <div className="row">
            <div className="col-md-3 col-12 now text-end py-3">
              <div>
                <h1 className="mt-2">Available Now</h1>
              </div>
            </div>
            <div className="col-md-3 col-12 now text-end py-3">
              <img src="Assets/window.png" alt="window" /> &nbsp; &nbsp;
              &nbsp;&nbsp;
              <img src="Assets/oclus.png" alt="window" />
            </div>

            <div className="col-md-3 col-12 now text-start py-3">
              <img src="Assets/vive.png" alt="window" />
              &nbsp; &nbsp; &nbsp;&nbsp;
              <img src="Assets/steam.png" alt="window" />
            </div>
            <div className="col-md-3 col-12 now text-start py-3">
              <h1 className="mt-2">Ready Now</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Virtual;
