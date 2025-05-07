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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TrustedCompanies = (props) => {
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
    speed: 2000,
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 6 },
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
      {/* Review */}
      <section className="section  company-hire">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-header hire-heading section-header-three text-center aos"
                data-aos="fade-up"
              >
                <span className="badge title-badge">Trusted Companies</span>
                <h2>Featured Companies in Kofejob</h2>
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
export default TrustedCompanies;
