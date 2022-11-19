import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12">
              <img src="assets/images/Group.png" alt="" />
            </div>
            <div className="col-md-8 col-12 d-flex align-items-center">
              <div className="hero_right ">
                <h2>The World’s Fastest Growing Crypto App</h2>
                <ul className="mt-4 position-relative">
                  <div className="list_icon"><img src="assets/images/list_icon.png" alt="" /></div>
                  <li>Join <span>50m+</span> users buying and selling <span>250+ cryptocurrencies at true cost</span></li>
                  <div className="list_icon"><img src="assets/images/list_icon.png" alt="" /></div>
                  <li>Spend with the Crypto Yeild Visa Card and <span>get up to 5%</span> back</li>
                  <div className="list_icon"><img src="assets/images/list_icon.png" alt="" /></div>
                  <li>Grow your portfolio by <span>receiving rewards up to 14.5%</span> on your crypto assets</li>
                </ul>
                <div className="mt-5">
                    <div className="d-flex justify-content-between align-items-center w-75" >
                        <img src="assets/images/app.png" alt="" />
                        <img src="assets/images/google.png" alt="" />
                        <img src="assets/images/Rectangle.png" alt="" />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
