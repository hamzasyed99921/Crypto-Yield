import React from "react";
import {AiOutlineArrowRight} from 'react-icons/ai'

const Deposit = () => {
  return (
    <>
      <div className="deposit_bg">
        <div className="container  ">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 col-12 w-50 ">
              <div className="deposit_left ">
              <p>CRYPTO EARN</p>
              <h2 className="mb-3">
                Deposit crypto, <br />
                earn rewards
              </h2>
              <small >Choose from 40+ cryptocurrencies and stablecoins.</small>
              <button className="mt-4">Calculate Rewards  <AiOutlineArrowRight className="ms-5"/></button>
              </div>
              <div className="row mt-5">
              <div className="col-md-6 botm_left">
                <small>Up to</small>
                <h2>14.5%</h2>
                <small>p.a. on cryptos</small>
              </div>
              <div className="col-md-6 botm_left">
              <small>Up to</small>
                <h2>8.5%</h2>
                <small>p.a. on stablecoins</small>
              </div>
              </div>
            </div>
            <div className="col-md-4 col-12  ">
                <img src="assets/images/Group.png" alt="" />
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Deposit;
