/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
// Import Images
import {
  Company_logo_01,
  Company_logo_02,
  Company_logo_03,
  Company_logo_04,
  Company_logo_05,
  Company_logo_06,
} from "../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CompanyHire = () => {
  //Aos
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);


  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
    autoplay: false,
    arrows: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 1000,
        settings: { slidesToShow: 6 },
      },
      {
        breakpoint: 700,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 550,
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
      {/* Review */}
      <section className="section top-company-four">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-12 mx-auto">
              <div
                className="section-header section-header-four section-locate aos"
                data-aos="fade-up"
              >
                <div className="text-center">
                  <h2 className="header-title">Trusted by the world’s best</h2>
                  <p>Top companies </p>
                </div>
              </div>
            </div>

            <Slider className="owl-theme" {...settings}>
              <div className="company-logos ">
                <img src={Company_logo_01} alt="" />
              </div>
              <div className="company-logos ">
                <img src={Company_logo_02} alt="" />
              </div>
              <div className="company-logos ">
                <img src={Company_logo_03} alt="" />
              </div>
              <div className="company-logos ">
                <img src={Company_logo_04} alt="" />
              </div>
              <div className="company-logos ">
                <img src={Company_logo_05} alt="" />
              </div>
              <div className="company-logos ">
                <img src={Company_logo_06} alt="" />
              </div>
              <div className="company-logos ">
                <img src={Company_logo_03} alt="" />
              </div>
              <div className="company-logos ">
                <img src={Company_logo_02} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
      {/* / Review */}
    </>
  );
};
export default CompanyHire;
