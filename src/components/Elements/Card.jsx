import React from "react";
import {AiOutlineArrowRight} from 'react-icons/ai'

const Card = () => {
  return (
    <>
      <div className="card_bg">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="text-center card_txt">
            <small>CRYPTO.COM VISA CARD</small>
            <h2>The only card you need</h2>
            <p>
              Enjoy up to 5% back on all spending with your sleek, pure metal
              card. <br /> No annual fees. Top-up with fiat or crypto.
            </p>
            <button>Choose Your Cards <AiOutlineArrowRight className="ms-5"/></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
