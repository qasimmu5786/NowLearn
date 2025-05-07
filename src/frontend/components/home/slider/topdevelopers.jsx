/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Import Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import Images
import {
  Avatar_1,
  Avatar_2,
  Avatar_3,
  Avatar_4,
  Avatar_5,
  locations,
} from "../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";

const CustomPrevArrow = (props) => (
  <button {...props} className="slick-prev">

  </button>
);

const CustomNextArrow = (props) => (
  <button {...props} className="slick-next">
  
  </button>
);

const TopDevelopers = () => {
  //Aos
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 2000,
    infinite: true,
    arrows: true,
    dots: false,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1170,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 0,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      {/* Top Instructor */}
      <section className="section developer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-12 mx-auto">
              <div className="section-header aos" data-aos="fade-up">
                <h2 className="header-title">Most Hired Developers</h2>
                <p>Work with talented people at the most affordable price</p>
              </div>
            </div>
          </div>
          <div
            id="developers-slider"
            className="owl-theme developers-slider aos"
            data-aos="fade-up"
          >
            <Slider
              className="owl-theme developers-slider aos"
              {...settings}
            >
              <div className="freelance-widget">
                <div className="freelance-content">
                  <Link data-toggle="modal" to="#rating" className="favourite">
                    <i className="feather-heart" />
                  </Link>
                  <div className="freelance-img">
                    <Link to="/developer-details">
                      <img src={Avatar_1} alt="User Image" />
                      <span className="verified">
                        <i className="fas fa-check-circle" />
                      </span>
                    </Link>
                  </div>
                  <div className="freelance-info">
                    <h3>
                      <Link to="/developer-details">Dran Gonzalez</Link>
                    </h3>
                    <div className="freelance-specific">React Developer</div>
                    <div className="freelance-location">
                      <img src={locations} className="me-2" alt="img" />
                      Illinois, USA
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">5.0 (30)</span>
                    </div>
                    <div className="freelance-tags">
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          Web Design
                        </span>
                      </Link>
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          UI Design
                        </span>
                      </Link>
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          Node Js
                        </span>
                      </Link>
                    </div>
                    <div className="freelance-blk-location">
                      <div className="freelancers-price">$25 Hourly</div>
                    </div>
                  </div>
                </div>
                <div className="cart-hover">
                  <Link
                    to="/developer-details"
                    className="btn-cart"
                    tabIndex={-1}
                  >
                    View Profile
                  </Link>
                </div>
              </div>
              <div className="freelance-widget">
                <div className="freelance-content">
                  <Link data-toggle="modal" to="#rating" className="favourite">
                    <i className="feather-heart" />
                  </Link>
                  <div className="freelance-img">
                    <Link to="/developer-details">
                      <img src={Avatar_2} alt="User Image" />
                      <span className="verified">
                        <i className="fas fa-check-circle" />
                      </span>
                    </Link>
                  </div>
                  <div className="freelance-info">
                    <h3>
                      <Link to="/developer-details">Timothy Smith</Link>
                    </h3>
                    <div className="freelance-specific">PHP Developer</div>
                    <div className="freelance-location">
                      <img src={locations} className="me-2" alt="img" />
                      Illinois, USA
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <span className="average-rating">3.5 (25)</span>
                    </div>
                    <div className="freelance-tags">
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          Web Design
                        </span>
                      </Link>
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          UI Design
                        </span>
                      </Link>
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          Node Js
                        </span>
                      </Link>
                    </div>
                    <div className="freelance-blk-location">
                      <div className="freelancers-price">$25 Hourly</div>
                    </div>
                  </div>
                </div>
                <div className="cart-hover">
                  <Link
                    to="/developer-details"
                    className="btn-cart"
                    tabIndex={-1}
                  >
                    View Profile
                  </Link>
                </div>
              </div>
              <div className="freelance-widget">
                <div className="freelance-content">
                  <Link data-toggle="modal" to="#rating" className="favourite">
                    <i className="feather-heart" />
                  </Link>
                  <div className="freelance-img">
                    <Link to="/developer-details">
                      <img src={Avatar_3} alt="User Image" />
                      <span className="verified">
                        <i className="fas fa-check-circle" />
                      </span>
                    </Link>
                  </div>
                  <div className="freelance-info">
                    <h3>
                      <Link to="/developer-details">Janet Paden</Link>
                    </h3>
                    <div className="freelance-specific">Graphic Designer</div>
                    <div className="freelance-location">
                      <img src={locations} className="me-2" alt="img" />
                      Illinois, USA
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">4.1 (30)</span>
                    </div>
                    <div className="freelance-tags">
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          Web Design
                        </span>
                      </Link>
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          UI Design
                        </span>
                      </Link>
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          Node Js
                        </span>
                      </Link>
                    </div>
                    <div className="freelance-blk-location">
                      <div className="freelancers-price">$25 Hourly</div>
                    </div>
                  </div>
                </div>
                <div className="cart-hover">
                  <Link
                    to="/developer-details"
                    className="btn-cart"
                    tabIndex={-1}
                  >
                    View Profile
                  </Link>
                </div>
              </div>
              <div className="freelance-widget">
                <div className="freelance-content">
                  <Link data-toggle="modal" to="#rating" className="favourite">
                    <i className="feather-heart" />
                  </Link>
                  <div className="freelance-img">
                    <Link to="/developer-details">
                      <img src={Avatar_4} alt="User Image" />
                      <span className="verified">
                        <i className="fas fa-check-circle" />
                      </span>
                    </Link>
                  </div>
                  <div className="freelance-info">
                    <h3>
                      <Link to="/developer-details">James Douglas</Link>
                    </h3>
                    <div className="freelance-specific">iOS Developer</div>
                    <div className="freelance-location">
                      <img src={locations} className="me-2" alt="img" />
                      Florida, USA
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">4.3 (31)</span>
                    </div>
                    <div className="freelance-tags">
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          Web Design
                        </span>
                      </Link>
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          UI Design
                        </span>
                      </Link>
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          Node Js
                        </span>
                      </Link>
                    </div>
                    <div className="freelance-blk-location">
                      <div className="freelancers-price">$25 Hourly</div>
                    </div>
                  </div>
                </div>
                <div className="cart-hover">
                  <Link
                    to="/developer-details"
                    className="btn-cart"
                    tabIndex={-1}
                  >
                    View Profile
                  </Link>
                </div>
              </div>
              <div className="freelance-widget">
                <div className="freelance-content">
                  <Link data-toggle="modal" to="#rating" className="favourite">
                    <i className="feather-heart" />
                  </Link>
                  <div className="freelance-img">
                    <Link to="/developer-details">
                      <img src={Avatar_2} alt="User Image" />
                      <span className="verified">
                        <i className="fas fa-check-circle" />
                      </span>
                    </Link>
                  </div>
                  <div className="freelance-info">
                    <h3>
                      <Link to="/developer-details">Richard Wilson</Link>
                    </h3>
                    <div className="freelance-specific">UI/UX Designer</div>
                    <div className="freelance-location">
                      <img src={locations} className="me-2" alt="img" />
                      Illinois, USA
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">4.7 (32)</span>
                    </div>
                    <div className="freelance-tags">
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          Web Design
                        </span>
                      </Link>
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          UI Design
                        </span>
                      </Link>
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          Node Js
                        </span>
                      </Link>
                    </div>
                    <div className="freelance-blk-location">
                      <div className="freelancers-price">$25 Hourly</div>
                    </div>
                  </div>
                </div>
                <div className="cart-hover">
                  <Link
                    to="/developer-details"
                    className="btn-cart"
                    tabIndex={-1}
                  >
                    View Profile
                  </Link>
                </div>
              </div>
              <div className="freelance-widget">
                <div className="freelance-content">
                  <Link data-toggle="modal" to="#rating" className="favourite">
                    <i className="feather-heart" />
                  </Link>
                  <div className="freelance-img">
                    <Link to="/developer-details">
                      <img src={Avatar_3} alt="User Image" />
                      <span className="verified">
                        <i className="fas fa-check-circle" />
                      </span>
                    </Link>
                  </div>
                  <div className="freelance-info">
                    <h3>
                      <Link to="/developer-details">Richard Wilson</Link>
                    </h3>
                    <div className="freelance-specific">UI/UX Designer</div>
                    <div className="freelance-location">
                      <img src={locations} className="me-2" alt="img" />
                      Alabama, USA
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">4.7 (32)</span>
                    </div>
                    <div className="freelance-tags">
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          Web Design
                        </span>
                      </Link>
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          UI Design
                        </span>
                      </Link>
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          Node Js
                        </span>
                      </Link>
                    </div>
                    <div className="freelance-blk-location">
                      <div className="freelancers-price">$25 Hourly</div>
                    </div>
                  </div>
                </div>
                <div className="cart-hover">
                  <Link
                    to="/developer-details"
                    className="btn-cart"
                    tabIndex={-1}
                  >
                    View Profile
                  </Link>
                </div>
              </div>
              <div className="freelance-widget">
                <div className="freelance-content">
                  <Link data-toggle="modal" to="#rating" className="favourite">
                    <i className="feather-heart" />
                  </Link>
                  <div className="freelance-img">
                    <Link to="/developer-details">
                      <img src={Avatar_4} alt="User Image" />
                      <span className="verified">
                        <i className="fas fa-check-circle" />
                      </span>
                    </Link>
                  </div>
                  <div className="freelance-info">
                    <h3>
                      <Link to="/developer-details">Richard Wilson</Link>
                    </h3>
                    <div className="freelance-specific">UI/UX Designer</div>
                    <div className="freelance-location">
                      <img src={locations} className="me-2" alt="img" />
                      Illinois, USA
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">4.7 (32)</span>
                    </div>
                    <div className="freelance-tags">
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          Web Design
                        </span>
                      </Link>
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          UI Design
                        </span>
                      </Link>
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          Node Js
                        </span>
                      </Link>
                    </div>
                    <div className="freelance-blk-location">
                      <div className="freelancers-price">$25 Hourly</div>
                    </div>
                  </div>
                </div>
                <div className="cart-hover">
                  <Link
                    to="/developer-details"
                    className="btn-cart"
                    tabIndex={-1}
                  >
                    View Profile
                  </Link>
                </div>
              </div>
              <div className="freelance-widget">
                <div className="freelance-content">
                  <Link data-toggle="modal" to="#rating" className="favourite">
                    <i className="feather-heart" />
                  </Link>
                  <div className="freelance-img">
                    <Link to="/developer-details">
                      <img src={Avatar_5} alt="User Image" />
                      <span className="verified">
                        <i className="fas fa-check-circle" />
                      </span>
                    </Link>
                  </div>
                  <div className="freelance-info">
                    <h3>
                      <Link to="/developer-details">Richard Wilson</Link>
                    </h3>
                    <div className="freelance-specific">UI/UX Designer</div>
                    <div className="freelance-location">
                      <img src={locations} className="me-2" alt="img" />
                      Alabama, USA
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">4.7 (32)</span>
                    </div>
                    <div className="freelance-tags">
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          Web Design
                        </span>
                      </Link>
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          UI Design
                        </span>
                      </Link>
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          Node Js
                        </span>
                      </Link>
                    </div>
                    <div className="freelance-blk-location">
                      <div className="freelancers-price">$25 Hourly</div>
                    </div>
                  </div>
                </div>
                <div className="cart-hover">
                  <Link
                    to="/developer-details"
                    className="btn-cart"
                    tabIndex={-1}
                  >
                    View Profile
                  </Link>
                </div>
              </div>
              <div className="freelance-widget">
                <div className="freelance-content">
                  <Link
                    data-toggle="modal"
                    to="#rating"
                    className="favourite favourited"
                  >
                    <i className="feather-heart" />
                  </Link>
                  <div className="freelance-img">
                    <Link to="/developer-details">
                      <img src={Avatar_3} alt="User Image" />
                      <span className="verified">
                        <i className="fas fa-check-circle" />
                      </span>
                    </Link>
                  </div>
                  <div className="freelance-info">
                    <h3>
                      <Link to="/developer-details">Richard Wilson</Link>
                    </h3>
                    <div className="freelance-specific">UI/UX Designer</div>
                    <div className="freelance-location">
                      <img src={locations} className="me-2" alt="img" />
                      Alabama, USA
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">4.8 (55)</span>
                    </div>
                    <div className="freelance-tags">
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          Web Design
                        </span>
                      </Link>
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          UI Design
                        </span>
                      </Link>
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          Node Js
                        </span>
                      </Link>
                    </div>
                    <div className="freelance-blk-location">
                      <div className="freelancers-price">$25 Hourly</div>
                    </div>
                  </div>
                </div>
                <div className="cart-hover">
                  <Link
                    to="/developer-details"
                    className="btn-cart"
                    tabIndex={-1}
                  >
                    View Profile
                  </Link>
                </div>
              </div>
              <div className="freelance-widget">
                <div className="freelance-content">
                  <Link data-toggle="modal" to="#rating" className="favourite">
                    <i className="feather-heart" />
                  </Link>
                  <div className="freelance-img">
                    <Link to="/developer-details">
                      <img src={Avatar_5} alt="User Image" />
                      <span className="verified">
                        <i className="feaather-heart" />
                      </span>
                    </Link>
                  </div>
                  <div className="freelance-info">
                    <h3>
                      <Link to="/developer-details">Richard Wilson</Link>
                    </h3>
                    <div className="freelance-specific">UI/UX Designer</div>
                    <div className="freelance-location">
                      <img src={locations} className="me-2" alt="img" />
                      Alabama, USA
                    </div>
                    <div className="rating">
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star filled" />
                      <i className="fas fa-star" />
                      <span className="average-rating">5.0 (4)</span>
                    </div>
                    <div className="freelance-tags">
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          Web Design
                        </span>
                      </Link>
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          UI Design
                        </span>
                      </Link>
                      <Link to="javascript:void(0);">
                        <span className="badge badge-pill badge-design">
                          Node Js
                        </span>
                      </Link>
                    </div>
                    <div className="freelance-blk-location">
                      <div className="freelancers-price">$25 Hourly</div>
                    </div>
                  </div>
                </div>
                <div className="cart-hover">
                  <Link
                    to="/developer-details"
                    className="btn-cart"
                    tabIndex={-1}
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
export { TopDevelopers };
