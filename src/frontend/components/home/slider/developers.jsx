/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Import Images
import {
  Developer_05,
  Developer_06,
  Developer_07,
  Developer_08,
  verified_badge,
} from "../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CustomPrevArrow = (props) => (
  <button {...props} className="slick-prev">
    
  </button>
);

const CustomNextArrow = (props) => (
  <button {...props} className="slick-next">
 
  </button>
);

const DevelopersFour = () => {
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
    infinite: true,
    dots: false,
    arrows: true,
    speed: 2000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1170,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 991,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 0,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <section className="section feaure-for-developer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-12 mx-auto">
            <div
              className="section-header section-header-four section-locate aos"
              data-aos="fade-up"
            >
              <div>
                <h2 className="header-title mb-0">
                  We have over 1400+ Developers
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div
          id="feature-project-slider"
          className="owl-theme trend-slider aos"
          data-aos="fade-up"
        >
          <Slider
            className=" popular-slider developers-slider owl-theme  aos"
            data-aos="fade-up"
            {...settings}
          >
            <div
              className="project-item project-item-feature aos"
              data-aos="fade-up"
            >
              <Link to="/developer-details">
                <div className="project-img heart-blk">
                  <img src={Developer_05} alt="Img" className="img-fluid" />
                  <span className="hour-dollr develop-dollr">
                    $64 <small>/ hr</small>
                  </span>
                </div>
              </Link>
              <div className="developer-detail-box">
                <div className="developer-detail-card">
                  <div>
                    <div className="d-flex align-items-center">
                      <h4 className="mb-0">
                        <Link to="/developer-details">Megan Torres</Link>
                      </h4>
                      <img className="ms-1" src={verified_badge} alt="Img" />
                    </div>
                    <p className="mb-0">Java Developer</p>
                  </div>
                  <div>
                    <Link to="javascript:void(0);" className="bookmark-check">
                      <i className="fa-regular fa-bookmark" />
                    </Link>
                  </div>
                </div>
                <div className="rate-block">
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="average-rating">5.0</span>
                  </div>
                  <div>
                    <Link to="/developer-details">
                      <i className="feather-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="project-item project-item-feature aos"
              data-aos="fade-up"
            >
              <Link to="/developer-details">
                <div className="project-img heart-blk">
                  <img src={Developer_06} alt="Img" className="img-fluid" />
                  <span className="hour-dollr develop-dollr">
                    $54 <small>/ hr</small>
                  </span>
                </div>
              </Link>
              <div className="developer-detail-box">
                <div className="developer-detail-card">
                  <div>
                    <div className="d-flex align-items-center">
                      <h4 className="mb-0">
                        <Link to="/developer-details">Nicole Black</Link>
                      </h4>
                      <img className="ms-1" src={verified_badge} alt="Img" />
                    </div>
                    <p className="mb-0">React Developer</p>
                  </div>
                  <div>
                    <Link to="javascript:void(0);" className="bookmark-check">
                      <i className="fa-regular fa-bookmark" />
                    </Link>
                  </div>
                </div>
                <div className="rate-block">
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="average-rating">5.0</span>
                  </div>
                  <div>
                    <Link to="/developer-details">
                      <i className="feather-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="project-item project-item-feature aos"
              data-aos="fade-up"
            >
              <Link to="/developer-details">
                <div className="project-img heart-blk">
                  <img src={Developer_07} alt="Img" className="img-fluid" />
                  <span className="hour-dollr develop-dollr">
                    $35 <small>/ hr</small>
                  </span>
                </div>
              </Link>
              <div className="developer-detail-box">
                <div className="developer-detail-card">
                  <div>
                    <div className="d-flex align-items-center">
                      <h4 className="mb-0">
                        <Link to="/developer-details">Shan Morris</Link>
                      </h4>
                      <img className="ms-1" src={verified_badge} alt="Img" />
                    </div>
                    <p className="mb-0">PHP Developer</p>
                  </div>
                  <div>
                    <Link to="javascript:void(0);" className="bookmark-check">
                      <i className="fa-regular fa-bookmark" />
                    </Link>
                  </div>
                </div>
                <div className="rate-block">
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="average-rating">5.0</span>
                  </div>
                  <div>
                    <Link to="/developer-details">
                      <i className="feather-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="project-item project-item-feature aos"
              data-aos="fade-up"
            >
              <Link to="/developer-details">
                <div className="project-img heart-blk">
                  <img src={Developer_08} alt="Img" className="img-fluid" />
                  <span className="hour-dollr develop-dollr">
                    $68 <small>/ hr</small>
                  </span>
                </div>
              </Link>
              <div className="developer-detail-box">
                <div className="developer-detail-card">
                  <div>
                    <div className="d-flex align-items-center">
                      <h4 className="mb-0">
                        <Link to="/developer-details">Harris Jod</Link>
                      </h4>
                      <img className="ms-1" src={verified_badge} alt="Img" />
                    </div>
                    <p className="mb-0">Java Developer</p>
                  </div>
                  <div>
                    <Link to="javascript:void(0);" className="bookmark-check">
                      <i className="fa-regular fa-bookmark" />
                    </Link>
                  </div>
                </div>
                <div className="rate-block">
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="average-rating">5.0</span>
                  </div>
                  <div>
                    <Link to="/developer-details">
                      <i className="feather-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="project-item project-item-feature aos"
              data-aos="fade-up"
            >
              <Link to="/developer-details">
                <div className="project-img heart-blk">
                  <img src={Developer_08} alt="Img" className="img-fluid" />
                  <span className="hour-dollr develop-dollr">
                    $64 <small>/ hr</small>
                  </span>
                </div>
              </Link>
              <div className="developer-detail-box">
                <div className="developer-detail-card">
                  <div>
                    <div className="d-flex align-items-center">
                      <h4 className="mb-0">
                        <Link to="/developer-details">Megan Torres</Link>
                      </h4>
                      <img className="ms-1" src={verified_badge} alt="Img" />
                    </div>
                    <p className="mb-0">Java Developer</p>
                  </div>
                  <div>
                    <Link to="javascript:void(0);" className="bookmark-check">
                      <i className="fa-regular fa-bookmark" />
                    </Link>
                  </div>
                </div>
                <div className="rate-block">
                  <div className="rating">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="average-rating">5.0</span>
                  </div>
                  <div>
                    <Link to="/developer-details">
                      <i className="feather-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="home-four-viewall">
          <Link to="/developer-details" className="home-four-viewall-btn">
            View More Developers <i className="feather-arrow-right ms-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default DevelopersFour;
