import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { BsTwitter,BsFacebook,BsInstagram ,BsApple,BsTelegram,BsPinterest,BsLinkedin,BsGoogle } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsReddit } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer
        className="footer text-center text-lg-start text-white"
        style={{ backgroundColor: "#160F1A" }}
      >
        <div className="container">
          <div className="row list">
            <div className="col-md-2 col-12">
              <ul className="list-unstyled">
                <p>App</p>
                <li>
                  <a href="#">Buy and Sell</a>
                </li>
                <li>
                  <a href="#">Crypto Earn</a>
                </li>
                <li>
                  <a href="#">Crypto Credit</a>
                </li>
                <li>
                  <a href="#">Crypto.com Pay</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-12">
              <ul className="list-unstyled">
                <p>Exchange</p>
                <li>
                  <a href="#">Exchange Home</a>
                </li>
                <li>
                  <a href="#">Margin Trading</a>
                </li>
                <li>
                  <a href="#">Derivatives Trading</a>
                </li>
                <li>
                  <a href="#">The Syndicate</a>
                </li>
                <li>
                  <a href="#">Supercharger</a>
                </li>
                <li>
                  <a href="#">Trading Arena</a>
                </li>
                <li>
                  <a href="#">Commerce</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-12">
              <ul className="list-unstyled">
                <p>Blockchain</p>
                <li>
                  <a href="#">Crypto.org Chain</a>
                </li>
                <li>
                  <a href="#">Chain Explorer</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-12">
              <ul className="list-unstyled">
                <p>Resources</p>
                <li>
                  <a href="#">Prices</a>
                </li>
                <li>
                  <a href="#">Site Widgets</a>
                </li>
                <li>
                  <a href="#">Tax</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-12 icons px-4">
              <img src="assets/images/footer1.png" className="me-2" alt="" />
              <img src="assets/images/footer.png" alt="" />
              <ul className="list-unstyled d-flex justify-content-around">
                <li>
                  <a href="#">
                    <BsFacebook
                      size={40}
                      style={{
                        border: "2px solid #fff)",
                        borderRadius: "50%",
                        padding: "4px",
                      }}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsInstagram
                      size={40}
                      style={{
                        border: "2px solid #fff)",
                        borderRadius: "50%",
                        padding: "4px",
                      }}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsTwitter
                      size={40}
                      style={{
                        border: "2px solid #fff)",
                        borderRadius: "50%",
                        padding: "4px",
                      }}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FaDiscord
                      size={40}
                      style={{
                        border: "2px solid #fff)",
                        borderRadius: "50%",
                        padding: "4px",
                      }}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsGithub
                      size={40}
                      style={{
                        border: "2px solid #fff)",
                        borderRadius: "50%",
                        padding: "4px",
                      }}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsYoutube
                      size={40}
                      style={{
                        border: "2px solid #fff)",
                        borderRadius: "50%",
                        padding: "4px",
                      }}
                    />
                  </a>
                </li>
                
              </ul>
              <ul className="list-unstyled d-flex justify-content-around">
                <li>
                  <a href="#">
                    <BsApple
                      size={40}
                      style={{
                        border: "2px solid #fff)",
                        borderRadius: "50%",
                        padding: "4px",
                      }}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsTelegram
                      size={40}
                      style={{
                        border: "2px solid #fff)",
                        borderRadius: "50%",
                        padding: "4px",
                      }}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsPinterest
                      size={40}
                      style={{
                        border: "2px solid #fff)",
                        borderRadius: "50%",
                        padding: "4px",
                      }}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsLinkedin
                      size={40}
                      style={{
                        border: "2px solid #fff)",
                        borderRadius: "50%",
                        padding: "4px",
                      }}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsGoogle
                      size={40}
                      style={{
                        border: "2px solid #fff)",
                        borderRadius: "50%",
                        padding: "4px",
                      }}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsReddit
                      size={40}
                      style={{
                        border: "2px solid #fff)",
                        borderRadius: "50%",
                        padding: "4px",
                      }}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row list mt-5">
            <div className="col-md-2 col-12">
              <ul className="list-unstyled">
                <p>Cards</p>
                <li>
                  <a href="#">Metal Visa Cards</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-12">
              <ul className="list-unstyled">
                <p>Commerce</p>
                <li>
                  <a href="#">Pay for Business</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-12">
              <ul className="list-unstyled">
                <p>DeFi</p>
                <li>
                  <a href="#">Wallet</a>
                </li>
                <li>
                  <a href="#">Swap</a>
                </li>
                <li>
                  <a href="#">Earn</a>
                </li>
                <li>
                  <a href="#">Dashboard</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-12">
              <ul className="list-unstyled">
                <p>Company</p>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 col-12">
              <ul className="list-unstyled">
                <p>Learn</p>
                <li>
                  <a href="#">What's Trending</a>
                </li>
                <li>
                  <a href="#">Product News</a>
                </li>
                <li>
                  <a href="#">Events</a>
                </li>
                <li>
                  <a href="#">University</a>
                </li>
                <li>
                  <a href="#">Research</a>
                </li>
                <li>
                  <a href="#">Market Updates</a>
                </li>
              </ul>
            </div>
            
          </div>
            <hr/>
          <div className="mt-4 d-flex align-items-center">
            <div className="" style={{ color: "#b7b8bb" }}>
              <strong>
              Copyright © 2018 - 2022 Crypto.com. All rights reserved.
              </strong>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
