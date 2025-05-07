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
  Review_01,
  Review_02,
  Review_03,
} from "../../imagepath";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopHiringCompany1 = () => {
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
      <section className="section top-company-two border-bottom-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                className="section-header section-header-two text-center aos"
                data-aos="fade-up"
              >
                <h2 className="header-title">
                  Trusted By The <span>World’s Best</span>
                </h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.{" "}
                </p>
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
export default TopHiringCompany1;
