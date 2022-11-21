import React from "react";

const Sections = () => {
  return (
    <>
      <div className="section_bg">
        <div className="container">
          <div className="d-flex justify-content-center ">
            <img src="assets/images/section.png" className="img-fluid" alt="" />
          </div>
          <div className="row section_grid">
            <div className="col-md-4 col-12">
              <h2>Liquidity</h2>
              <p>Deep order book liquidity in all market conditions</p>
            </div>
            <div className="col-md-4 col-12">
              <h2>Speed</h2>
              <p>
                2.7m TPS matching engine <br />
                50 micro second core latency
              </p>
            </div>
            <div className="col-md-4 col-12">
              <h2>Security</h2>
              <p>
                SOC2 Type 1 Compliance <br />
                PCI:DSS 3.2.1 Level 1 compliance <br />
                ISO/IEC 27001:2013 <br />
                ISO/IEC 27701:2019 <br />
                ISO 22301:2019 <br />
                Singapore Data Protection Trust Mark
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sections;
