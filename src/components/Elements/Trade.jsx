import React from "react";
import {FiArrowUpRight} from 'react-icons/fi'

const Trade = () => {
  return (
    <>
      <div className="trade_bg">
        <div className="container">
          <p className="text-center">CRYPTO.COM EXCHANGE</p>
          <h3 className="text-center">
            Trade with confidence on the world’s fastest and most secure crypto
            exchange
          </h3>
          <div className="text-center trade_botm d-flex flex-wrap justify-content-center mt-5">
            <div className="d-flex mb-3 ">
              <img
                src="assets/images/monitor.png"
                className=""
                alt=""/>
              <div className="d-flex flex-column w-100 ms-3 me-3">
                <span className="text-start">DESKTOP</span>
                <a href="#">Go to Exchange <FiArrowUpRight/></a>
              </div>
            </div>
            <div className="d-flex  ">
              <img
                src="assets/images/smartphone.png"
                className="img-fluid"
                alt=""/>
              <div className="d-flex flex-column ms-3">
                <span className="text-start">MOBILE APP</span>
               <div className="d-flex">
               <img
                src="assets/images/Vector.png"
                className="img-fluid me-2"
                alt=""/>
                <img
                src="assets/images/Vector1.png"
                className="img-fluid mx-2"
                alt=""/>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trade;
