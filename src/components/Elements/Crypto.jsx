import React from "react";
import {AiOutlineArrowRight} from 'react-icons/ai'

const Crypto = () => {
  return (
    <>
      <div className="crypto_bg">
        <div className="container">
          <p className="text-center">SECURELY BUY, SELL, STORE, SEND AND TRACK</p>
          <h2 className="text-center">Buy crypto at true cost</h2>
          <h3 className="text-center botm_txt">
            Buy and sell 250+ cryptocurrencies with 20+ fiat currencies <br /> using
            bank transfers or your credit/debit card.
          </h3>
          <div className="crypto_table mt-5">
            <div className="row d-flex crypto_txt align-items-center ">
                <div className="col-md-2 col-12 text-start"><h2>Bitcoin <span>BTA</span></h2></div>
                <div className="col-md-2 col-12 text-start "><h1>$21,019.25</h1></div>
                <div className="col-md-2 col-12 text-center"> <h4>-1.35%</h4></div>
                <div className="col-md-3 col-12"> <h3>$400,939,726,363.91</h3></div>
                <div className="col-md-2 col-12 tbl_img">  <img src="assets/images/Graph.png" className="" alt="" /></div>
                <div className="col-md-1 col-12 tbl_img"><button className="btn">Trade</button></div>
            </div>
            <hr />
            <div className="row d-flex crypto_txt align-items-center ">
                <div className="col-md-2 col-12 text-start"> <h2>Ethereum <span>ETH</span></h2></div>
                <div className="col-md-2 col-12 text-start "><h1>$1,593.36</h1></div>
                <div className="col-md-2 col-12 text-center"> <h4>-2.40%</h4></div>
                <div className="col-md-3 col-12"> <h3>$193,478,949,760.73</h3></div>
                <div className="col-md-2 col-12 tbl_img">  <img src="assets/images/Graph2.png" alt="" /></div>
                <div className="col-md-1 col-12 tbl_img"><button className="btn">Trade</button></div>
            </div>
            <hr />
            <div className="row d-flex crypto_txt align-items-center ">
                <div className="col-md-2 col-12 text-start"> <h2>Cardano <span>ADA</span></h2></div>
                <div className="col-md-2 col-12 text-start "><h1>$0.411385</h1></div>
                <div className="col-md-2 col-12 text-center"><h4>-3.69%</h4></div>
                <div className="col-md-3 col-12"><h3>$13,957,416,040.67</h3></div>
                <div className="col-md-2 col-12 tbl_img"> <img src="assets/images/Graph.png" alt="" /></div>
                <div className="col-md-1 col-12 tbl_img"><button className="btn">Trade</button></div>
            </div>
            <hr />
            <div className="row d-flex crypto_txt align-items-center ">
                <div className="col-md-2 col-12 text-start"> <h2>Dogecoin <span>DOGE</span></h2></div>
                <div className="col-md-2 col-12 text-start"><h1>$0.118427</h1></div>
                <div className="col-md-2 col-12 text-center"><h4>-5.00%</h4></div>
                <div className="col-md-3 col-12"> <h3>$15,551,890,509.69</h3></div>
                <div className="col-md-2 col-12 tbl_img"> <img src="assets/images/Graph2.png" alt="" /></div>
                <div className="col-md-1 col-12 tbl_img"><button className="btn">Trade</button></div>
            </div>
            <hr />
            <div className="row d-flex crypto_txt align-items-center ">
                <div className="col-md-2 col-12 text-start"><h2>Polkadot <span>DOT</span></h2></div>
                <div className="col-md-2 col-12 text-start"><h1>$6.95</h1></div>
                <div className="col-md-2 col-12 text-center"> <h4>-1.79%</h4></div>
                <div className="col-md-3 col-12"> <h3>$7,791,830,488.81</h3></div>
                <div className="col-md-2 col-12 tbl_img"> <img src="assets/images/Graph.png" alt="" /></div>
                <div className="col-md-1 col-12 tbl_img"><button className="btn">Trade</button></div>
            </div>
            <hr />
          </div>
         <div className="mt-5 text-center">
         <button >Learn More <AiOutlineArrowRight className="ms-3"/></button>
         </div>
        </div>
      </div>
    </>
  );
};

export default Crypto;
