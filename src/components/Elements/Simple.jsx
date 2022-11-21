import React from "react";

const Simple = () => {
  return (
    <>
      <div className="simple_bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 d-flex justify-content-center">
              <img src="assets/images/Group.png" alt="" />
            </div>
            <div className="col-md-6 col-12  mt-4">
             <div className="simple_right">
             <p>CRYPTO.COM DEFI</p>
              <h2 className="mt-2">DeFi Made Simple</h2>
              <h3>
                <span>DeFi Wallet.</span> Your Keys, Your Crypto.
              </h3>
              <h3>
                <span>DeFi Earn.</span>   No lock-up period and stable returns.

              </h3>
              <h3>
                <span>DeFi Swap.</span>   Swap DeFi coins and earn Triple Yield.
              </h3>
              <button className="mt-4">Go to Crypto.com DeFi</button>
             </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Simple;
