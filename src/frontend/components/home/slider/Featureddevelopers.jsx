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
import { FiArrowRight } from "react-icons/fi";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = (props) => (
  <button {...props} className="slick-prev">
    
  </button>
);

const CustomNextArrow = (props) => (
  <button {...props} className="slick-next">
 
  </button>
);

const FeaturedDevelopers = () => {
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
    <section className="section feaure-project">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 mx-auto">
            <div
              className="section-header section-header-three justify-content-start text-start aos"
              data-aos="fade-up"
            >
              <span className="badge title-badge">Featured Developers</span>
              <h2 className="header-title">We have over 1400+ Developers</h2>
            </div>
          </div>
        </div>

        <div
          id="feature-project-slider"
          className="owl-theme trend-slider aos"
          data-aos="fade-up"
        >
          <Slider
            className="feature-dev-three owl-theme trend-slider aos"
            data-aos="fade-up"
            {...settings}
          >
            <div className="project-item project-item-feature">
              <div className="project-img heart-blk">
                <Link to="/developer-details">
                  <img src={Developer_05} alt="Img" className="img-fluid" />
                </Link>
                <h5 className="hour-dollr">
                  $64 <span>/ hr</span>
                </h5>
              </div>
              <div className="feature-project-content">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <h4 className="d-flex">
                    <Link to="/developer-details">Megan Torres</Link>
                    <img src={verified_badge} className="ms-1" alt="Img" />
                  </h4>
                  <Link to="javascript:void(0);" className="select-favourite">
                    <i className="fa-regular fa-bookmark" />
                  </Link>
                </div>
                <p>Java Developer</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="rating mb-0">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="average-rating">5.0</span>
                  </div>
                  <div className="feature-developer-foot d-flex justify-content-center">
                    <Link to="/developer-details">
                      <i className="feather-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-item project-item-feature">
              <div className="project-img heart-blk">
                <Link to="/developer-details">
                  <img src={Developer_06} alt="Img" className="img-fluid" />
                </Link>
                <h5 className="hour-dollr">
                  $54 <span>/ hr</span>
                </h5>
              </div>
              <div className="feature-project-content">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <h4 className="d-flex">
                    <Link to="/developer-details">Nicole Black</Link>
                    <img src={verified_badge} className="ms-1" alt="Img" />
                  </h4>
                  <Link to="javascript:void(0);" className="select-favourite">
                    <i className="fa-regular fa-bookmark" />
                  </Link>
                </div>
                <p>Angular Developer</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="rating mb-0">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="average-rating">5.0</span>
                  </div>
                  <div className="feature-developer-foot d-flex justify-content-center">
                    <Link to="/developer-details">
                      <i className="feather-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item project-item-feature">
              <div className="project-img heart-blk">
                <Link to="/developer-details">
                  <img src={Developer_07} alt="Img" className="img-fluid" />
                </Link>
                <h5 className="hour-dollr">
                  $50 <span>/ hr</span>
                </h5>
              </div>
              <div className="feature-project-content">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <h4 className="d-flex">
                    <Link to="/developer-details">Shan Morris</Link>
                    <img src={verified_badge} className="ms-1" alt="Img" />
                  </h4>
                  <Link to="javascript:void(0);" className="select-favourite">
                    <i className="fa-regular fa-bookmark" />
                  </Link>
                </div>
                <p>Html Developer</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="rating mb-0">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="average-rating">5.0</span>
                  </div>
                  <div className="feature-developer-foot d-flex justify-content-center">
                    <Link to="/developer-details">
                      <i className="feather-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item project-item-feature">
              <div className="project-img heart-blk">
                <Link to="/developer-details">
                  <img src={Developer_08} alt="Img" className="img-fluid" />
                </Link>
                <h5 className="hour-dollr">
                  $55 <span>/ hr</span>
                </h5>
              </div>
              <div className="feature-project-content">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <h4 className="d-flex">
                    <Link to="/developer-details">Harris Jod</Link>
                    <img src={verified_badge} className="ms-1" alt="Img" />
                  </h4>
                  <Link to="javascript:void(0);" className="select-favourite">
                    <i className="fa-regular fa-bookmark" />
                  </Link>
                </div>
                <p>React Developer</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="rating mb-0">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="average-rating">5.0</span>
                  </div>
                  <div className="feature-developer-foot d-flex justify-content-center">
                    <Link to="/developer-details">
                      <i className="feather-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item project-item-feature">
              <div className="project-img heart-blk">
                <Link to="/developer-details">
                  <img src={Developer_05} alt="Img" className="img-fluid" />
                </Link>
                <h5 className="hour-dollr">
                  $64 <span>/ hr</span>
                </h5>
              </div>
              <div className="feature-project-content">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <h4 className="d-flex">
                    <Link to="/developer-details">Megan Torres</Link>
                    <img src={verified_badge} className="ms-1" alt="Img" />
                  </h4>
                  <Link to="javascript:void(0);" className="select-favourite">
                    <i className="fa-regular fa-bookmark" />
                  </Link>
                </div>
                <p>Java Developer</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="rating mb-0">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="average-rating">5.0</span>
                  </div>
                  <div className="feature-developer-foot d-flex justify-content-center">
                    <Link to="/developer-details">
                      <i className="feather-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item project-item-feature">
              <div className="project-img heart-blk">
                <Link to="/developer-details">
                  <img src={Developer_06} alt="Img" className="img-fluid" />
                </Link>
                <h5 className="hour-dollr">
                  $54 <span>/ hr</span>
                </h5>
              </div>
              <div className="feature-project-content">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <h4 className="d-flex">
                    <Link to="/developer-details">Nicole Black</Link>
                    <img src={verified_badge} className="ms-1" alt="Img" />
                  </h4>
                  <Link to="javascript:void(0);" className="select-favourite">
                    <i className="fa-regular fa-bookmark" />
                  </Link>
                </div>
                <p>Angular Developer</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="rating mb-0">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="average-rating">5.0</span>
                  </div>
                  <div className="feature-developer-foot d-flex justify-content-center">
                    <Link to="/developer-details">
                      <i className="feather-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-item project-item-feature">
              <div className="project-img heart-blk">
                <Link to="/developer-details">
                  <img src={Developer_07} alt="Img" className="img-fluid" />
                </Link>
                <h5 className="hour-dollr">
                  $50 <span>/ hr</span>
                </h5>
              </div>
              <div className="feature-project-content">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <h4 className="d-flex">
                    <Link to="/developer-details">Shan Morris</Link>
                    <img src={verified_badge} className="ms-1" alt="Img" />
                  </h4>
                  <Link to="javascript:void(0);" className="select-favourite">
                    <i className="fa-regular fa-bookmark" />
                  </Link>
                </div>
                <p>Html Developer</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="rating mb-0">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="average-rating">5.0</span>
                  </div>
                  <div className="feature-developer-foot d-flex justify-content-center">
                    <Link to="/developer-details">
                      <i className="feather-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item project-item-feature">
              <div className="project-img heart-blk">
                <Link to="/developer-details">
                  <img src={Developer_08} alt="Img" className="img-fluid" />
                </Link>
                <h5 className="hour-dollr">
                  $55 <span>/ hr</span>
                </h5>
              </div>
              <div className="feature-project-content">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <h4 className="d-flex">
                    <Link to="/developer-details">Harris Jod</Link>
                    <img src={verified_badge} className="ms-1" alt="Img" />
                  </h4>
                  <Link to="javascript:void(0);" className="select-favourite">
                    <i className="fa-regular fa-bookmark" />
                  </Link>
                </div>
                <p>React Developer</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="rating mb-0">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="average-rating">5.0</span>
                  </div>
                  <div className="feature-developer-foot d-flex justify-content-center">
                    <Link to="/developer-details">
                      <i className="feather-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item project-item-feature">
              <div className="project-img heart-blk">
                <Link to="/developer-details">
                  <img src={Developer_05} alt="Img" className="img-fluid" />
                </Link>
                <h5 className="hour-dollr">
                  $64 <span>/ hr</span>
                </h5>
              </div>
              <div className="feature-project-content">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <h4 className="d-flex">
                    <Link to="/developer-details">Megan Torres</Link>
                    <img src={verified_badge} className="ms-1" alt="Img" />
                  </h4>
                  <Link to="javascript:void(0);" className="select-favourite">
                    <i className="fa-regular fa-bookmark" />
                  </Link>
                </div>
                <p>Java Developer</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="rating mb-0">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="average-rating">5.0</span>
                  </div>
                  <div className="feature-developer-foot d-flex justify-content-center">
                    <Link to="/developer-details">
                      <i className="feather-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-item project-item-feature">
              <div className="project-img heart-blk">
                <Link to="/developer-details">
                  <img src={Developer_06} alt="Img" className="img-fluid" />
                </Link>
                <h5 className="hour-dollr">
                  $54 <span>/ hr</span>
                </h5>
              </div>
              <div className="feature-project-content">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <h4 className="d-flex">
                    <Link to="/developer-details">Nicole Black</Link>
                    <img src={verified_badge} className="ms-1" alt="Img" />
                  </h4>
                  <Link to="javascript:void(0);" className="select-favourite">
                    <i className="fa-regular fa-bookmark" />
                  </Link>
                </div>
                <p>Angular Developer</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="rating mb-0">
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star filled" />
                    <i className="fas fa-star" />
                    <span className="average-rating">5.0</span>
                  </div>
                  <div className="feature-developer-foot d-flex justify-content-center">
                    <Link to="/developer-details">
                      <i className="feather-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div className="row">
          <div className="col-md-12 text-center aos" data-aos="fade-up">
            <div
              className="view-locations all-views text-center aos aos-init aos-animate"
              data-aos="fade-up"
            >
              <Link to="developer-details" className="btn btn-primary ">
                View all Developers{" "}
                <span className="location-right">
                  <FiArrowRight className="feather-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeaturedDevelopers;
