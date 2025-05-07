/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Review_01, Review_02, Review_03, Test_quote } from "../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ReviewUser = () => {
  //Aos

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 2000,
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1200,
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
    <>
      <section className="section review review-two">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-header section-header-two text-center aos"
                data-aos="fade-up"
              >
                <h2 className="header-title">
                  Reviews Of The <span>Users</span>
                </h2>
                <p>What our Clients say about us </p>
              </div>
            </div>
          </div>
          <div
            id="testimonial-slider-two"
            className="owl-theme testimonial-slider aos"
            data-aos="fade-up"
          >
            <Slider className="owl-theme active" {...settings}>
              {/* Review Widget */}
              <div className="review-blog user-review">
                <div className="review-top ">
                  <div className="review-img mx-auto">
                    <Link to="/review">
                      <img
                        className="img-fluid"
                        src={Review_01}
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="review-info text-center">
                    <h3>
                      <Link to="/review">Durso Raeen</Link>
                    </h3>
                    <h5>Project Lead</h5>
                  </div>
                </div>
                <div className="review-content text-center">
                  <p>
                    Respond to every review, both positive and negative. Thank
                    clients for positive feedback and address concerns in
                    negative reviews professionally and empathetically.
                  </p>
                </div>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="average-rating">5.0</span>
                </div>
              </div>
              {/* / Review Widget */}
              {/* Review Widget */}
              <div className="review-blog user-review">
                <div className="review-top ">
                  <div className="review-img mx-auto">
                    <Link to="/review">
                      <img
                        className="img-fluid"
                        src={Review_02}
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="review-info text-center">
                    <h3>
                      <Link to="/review">Camelia Rennesa</Link>
                    </h3>
                    <h5>Team Lead</h5>
                  </div>
                </div>
                <div className="review-content text-center">
                  <p>
                    Respond promptly to reviews. Aim to acknowledge and reply to
                    reviews within a reasonable timeframe, ideally within 24-48
                    hours.
                  </p>
                </div>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="average-rating">5.0</span>
                </div>
              </div>
              {/* / Review Widget */}

              {/* Review Widget */}
              <div className="review-blog user-review">
                <div className="review-top ">
                  <div className="review-img mx-auto">
                    <Link to="/review">
                      <img
                        className="img-fluid"
                        src={Review_03}
                        alt="Post Image"
                      />
                    </Link>
                  </div>
                  <div className="review-info text-center">
                    <h3>
                      <Link to="/review">Brayan</Link>
                    </h3>
                    <h5>Project Lead</h5>
                  </div>
                </div>
                <div className="review-content text-center">
                  <p>
                    Maintain a professional and courteous tone in all responses,
                    even when addressing negative reviews. Avoid getting
                    defensive or confrontational.
                  </p>
                </div>
                <div className="rating">
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star filled" />
                  <i className="fas fa-star" />
                  <span className="average-rating">5.0</span>
                </div>
              </div>
              {/* / Review Widget */}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
export default ReviewUser;
