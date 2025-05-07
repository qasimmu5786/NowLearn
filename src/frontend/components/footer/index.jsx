import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../imagepath";
// eslint-disable-next-line no-unused-vars

const Footer = (props) => {
  // eslint-disable-next-line no-unused-vars, react/prop-types
  const pathname = props.location.pathname.split("/")[1];

  const exclusionArray = [
    "/index-two",
    "/index-three",
    "/index-four",
    "/index-five",
    "/onboard-screen",
    "/onboard-screen-employer",
  ];
  // eslint-disable-next-line react/prop-types
  if (exclusionArray.indexOf(props.location.pathname) >= 0) {
    return "";
  }
  // console.log(props.location,"location")

  return (
    <>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className=" col-lg-4 col-md-12">
                <div className="footer-bottom-logo">
                  <Link to="/" className="menu-logo">
                    <img src={logo} className="img-fluid" alt="Logo" />
                  </Link>
                  <p>
                    We’re always in search for talented and motivated people.
                    Don’t be shy introduce yourself!
                  </p>
                  <ul>
                    <li>
                      <Link to="#">
                        <i
                          className="fa-brands fa-facebook-f"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i
                          className="fa-brands fa-twitter"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i
                          className="fa-brands fa-instagram"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i
                          className="fa-brands fa-linkedin"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  </ul>
                  <Link to="#" className="btn btn-connectus">
                    Contact with us
                  </Link>
                </div>
              </div>
              <div className=" col-lg-8 col-md-12">
                <div className="row">
                  <div className="col-xl-3 col-md-6">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">Useful Links</h2>
                      <ul>
                        <li>
                          <Link to="/about">
                            <i className="fas fa-angle-right me-1" />
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link to="/blog-list">
                            <i className="fas fa-angle-right me-1" />
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link to="/login">
                            <i className="fas fa-angle-right me-1" />
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link to="/register">
                            <i className="fas fa-angle-right me-1" />
                            Register
                          </Link>
                        </li>
                        <li>
                          <Link to="/forgot-password">
                            <i className="fas fa-angle-right me-1" />
                            Forgot Password
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">Help &amp; Support</h2>
                      <ul>
                        <li>
                          <Link to="#">
                            <i className="fas fa-angle-right me-1" />
                            Browse Candidates
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fas fa-angle-right me-1" />
                            Employers Dashboard
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fas fa-angle-right me-1" />
                            Job Packages
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fas fa-angle-right me-1" />
                            Jobs Featured
                          </Link>
                        </li>
                        <li>
                          <Link to="#">
                            <i className="fas fa-angle-right me-1" />
                            Post A Job
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">Other Links</h2>
                      <ul>
                        <li>
                          <Link to="/freelancer-dashboard">
                            <i className="fas fa-angle-right me-1" />
                            Freelancers
                          </Link>
                        </li>
                        <li>
                          <Link to="/freelancer-portfolio">
                            <i className="fas fa-angle-right me-1" />
                            Freelancer Details
                          </Link>
                        </li>
                        <li>
                          <Link to="/project">
                            <i className="fas fa-angle-right me-1" />
                            Project
                          </Link>
                        </li>
                        <li>
                          <Link to="/project-details">
                            <i className="fas fa-angle-right me-1" />
                            Project Details
                          </Link>
                        </li>
                        <li>
                          <Link to="/post-project">
                            <i className="fas fa-angle-right me-1" />
                            Post Project
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6">
                    <div className="footer-widget footer-menu">
                      <h2 className="footer-title">Connect With Us</h2>
                      <ul>
                        <li>
                          <Link to="/freelancer-chats">
                            <i className="fas fa-angle-right me-1" />
                            Chat
                          </Link>
                        </li>
                        <li>
                          <Link to="/faq">
                            <i className="fas fa-angle-right me-1" />
                            Faq
                          </Link>
                        </li>
                        <li>
                          <Link to="/freelancer-review">
                            <i className="fas fa-angle-right me-1" />
                            Reviews
                          </Link>
                        </li>
                        <li>
                          <Link to="/privacy-policy">
                            <i className="fas fa-angle-right me-1" />
                            Privacy Policy
                          </Link>
                        </li>
                        <li>
                          <Link to="/term-condition">
                            <i className="fas fa-angle-right me-1" />
                            Terms of use
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Footer Top */}
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            {/* Copyright */}
            <div className="copyright">
              <div className="row">
                <div className="col-md-12">
                  <div className="copyright-text text-center">
                    <p className="mb-0">
                      Copyright 2023 © KofeJob. All right reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* /Copyright */}
          </div>
        </div>
        {/* /Footer Bottom */}
      </footer>

      {/* /Footer */}
    </>
  );
};

export default Footer;
