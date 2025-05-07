/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Import Slick Slider
// Import Images
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Review_01, Review_02, Review_03 } from "../../imagepath";
import Slider from "react-slick";
const CustomPrevArrow = (props) => (
  <button {...props} className="slick-prev">
    
  </button>
);

const CustomNextArrow = (props) => (
  <button {...props} className="slick-next">
    
  </button>
);

const TopReviewFour = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const settings = {
    slidesToShow: 3, // Since all breakpoints set items to 1
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    arrows: true,
    speed: 500, // Equivalent to slideSpeed
    autoplay: false,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <section className="section testimonial-section review review-four">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-header aos text-center" data-aos="fade-up">
              <h2 className="header-title">Client testimonials</h2>
              <p>
                Learning communicate to global world and build a bright future
                and career development, increase your skill with our histudy.
              </p>
            </div>
          </div>
        </div>
        <div
          id="testimonial-two"
          className="owl-theme testimonial-slider aos"
          data-aos="fade-up"
        >
          <Slider
            {...settings}
            className="owl-theme testimonial-two testimonial-slider aos"
            data-aos="fade-up"
          >
            {/* Review Widget */}
            <div className="review-blog">
              <div className="review-top d-flex align-items-center">
                <div className="review-img">
                  <Link to="/review">
                    <img
                      className="img-fluid"
                      src={Review_01}
                      alt="Post Image"
                    />
                  </Link>
                </div>
                <div className="review-info">
                  <h3>
                    <Link to="/review">Durso Raeen</Link>
                  </h3>
                  <h5>Project Lead</h5>
                </div>
              </div>
              <div className="review-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus
                  aenean.
                </p>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
            {/* / Review Widget */}
            {/* Review Widget */}
            <div className="review-blog">
              <div className="review-top d-flex align-items-center">
                <div className="review-img">
                  <Link to="/review">
                    <img
                      className="img-fluid"
                      src={Review_02}
                      alt="Post Image"
                    />
                  </Link>
                </div>
                <div className="review-info">
                  <h3>
                    <Link to="/review">Camelia Rennesa</Link>
                  </h3>
                  <h5>Project Lead</h5>
                </div>
              </div>
              <div className="review-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus
                  aenean.
                </p>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
            {/* /Review Widget */}
            {/* Review Widget */}
            <div className="review-blog">
              <div className="review-top d-flex align-items-center">
                <div className="review-img">
                  <Link to="/review">
                    <img
                      className="img-fluid"
                      src={Review_03}
                      alt="Post Image"
                    />
                  </Link>
                </div>
                <div className="review-info">
                  <h3>
                    <Link to="/review">Brayan</Link>
                  </h3>
                  <h5>Team Lead</h5>
                </div>
              </div>
              <div className="review-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus
                  aenean.
                </p>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
            {/* /Review Widget */}
            {/* Review Widget */}
            <div className="review-blog">
              <div className="review-top d-flex align-items-center">
                <div className="review-img">
                  <Link to="/review">
                    <img
                      className="img-fluid"
                      src={Review_02}
                      alt="Post Image"
                    />
                  </Link>
                </div>
                <div className="review-info">
                  <h3>
                    <Link to="/review">Davis Payerf</Link>
                  </h3>
                  <h5>Project Lead</h5>
                </div>
              </div>
              <div className="review-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus
                  aenean.
                </p>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                </div>
              </div>
            </div>
            {/* /Review Widget */}
          </Slider>
        </div>
      </div>
    </section>
  );
};
export default TopReviewFour;
