import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
       <nav className="navbar navbar-expand-lg fixed-top  " style={{zIndex: '1'}} id="navbar_top">
        <div className="container">
          <Link className="navbar-brand" to="/">
          Crypto Yield
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto text-center mb-2  mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link " aria-current="page" to="#">
                  NFT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Price
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Company
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Learn
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav_icon" to="#">
                  <img src="assets/images/apple.png" className='w-75' alt="" />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav_icon" to="#">
                  <img src="assets/images/playstore.png" alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header