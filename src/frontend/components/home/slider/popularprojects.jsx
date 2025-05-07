/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {  Project_29, Project_30, Project_31, Reg_icon } from '../../imagepath';
import AOS from "aos";
import "aos/dist/aos.css";

const CustomPrevArrow = (props) => (
  <button {...props} className="slick-prev">

  </button>
);

const CustomNextArrow = (props) => (
  <button {...props} className="slick-next">

  </button>
);

const PopularProjects = () => {
    //Aos

    useEffect(() => {
        AOS.init({
            duration: 1200,
            once: true
        });

    }, []);

    const settings = {
      slidesToShow: 3,
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
  

    return(
<>
  {/* Popular Projects */}
  <section className="section popular-projects">
    <div className="container">
    <div className="row">
						<div className="col-md-12 col-sm-12 col-12 mx-auto">
							<div className="section-header  section-locate aos" data-aos="fade-up">
								<div>
									<h2 className="header-title">Popular Projects near you  </h2>
									<p>Bid and stary the new Jobs </p>
								</div>
								
							</div>
						</div>
					</div>
      <div
        id="popular-slider"
        className="owl-theme popular-slider developers-slider aos"
        data-aos="fade-up"
      >
        <Slider className="owl-theme popular-slider developers-slider aos" data-aos="fade-up"{...settings}>
        <div className="popular-group">
          <div className="blog-image">
            <Link to="project">
              <img
                className="img-fluid"
                src={Project_29}
                alt="Post Image"
              />
            </Link>
          </div>
          <div className="popular-content-blk">
            <div className="head-popular">
              <h4>
                <Link to="project">UI/UX for Cryptocurrency Exchange</Link>
              </h4>
              <p>
                <img
                  src={Reg_icon}
                  className="me-2"
                  alt="icon"
                />
                Web Development
              </p>
            </div>
            <div className="popular-list-box">
              <ul className="nav">
                <li>Figma</li>
                <li>Adobe Xd</li>
              </ul>
              <h4>
                $80 - $180<span>/hour</span>
              </h4>
            </div>
            <p className="popular-foot">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae architecto eveniet, dolor quo repellendus pariatur
            </p>
          </div>
        </div>
        <div className="popular-group">
          <div className="blog-image">
            <Link to="project">
              <img
                className="img-fluid"
                src={Project_30}
                alt="Post Image"
              />
            </Link>
          </div>
          <div className="popular-content-blk">
            <div className="head-popular">
              <h4>
                <Link to="project">Website Design for a Consumer Shop</Link>
              </h4>
              <p>
                <img
                  src={Reg_icon}
                  className="me-2"
                  alt="icon"
                />
                Angular Development
              </p>
            </div>
            <div className="popular-list-box">
              <ul className="nav">
                <li>Angular</li>
              </ul>
              <h4>
                $40 - $80<span>/hour</span>
              </h4>
            </div>
            <p className="popular-foot">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae architecto eveniet, dolor quo repellendus pariatur
            </p>
          </div>
        </div>
        <div className="popular-group">
          <div className="blog-image">
            <Link to="project">
              <img
                className="img-fluid"
                src={Project_31}
                alt="Post Image"
              />
            </Link>
          </div>
          <div className="popular-content-blk">
            <div className="head-popular">
              <h4>
                <Link to="project">Build a Coaching Website Product </Link>
              </h4>
              <p>
                <img
                  src={Reg_icon}
                  className="me-2"
                  alt="icon"
                />
                Node JS Development
              </p>
            </div>
            <div className="popular-list-box">
              <ul className="nav">
                <li>Figma</li>
                <li>Node JS</li>
              </ul>
              <h4>
                $60 - $120<span>/hour</span>
              </h4>
            </div>
            <p className="popular-foot">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae architecto eveniet, dolor quo repellendus pariatur
            </p>
          </div>
        </div>
        <div className="popular-group">
          <div className="blog-image">
            <Link to="project">
              <img
                className="img-fluid"
                src={Project_30}
                alt="Post Image"
              />
            </Link>
          </div>
          <div className="popular-content-blk">
            <div className="head-popular">
              <h4>
                <Link to="project">Website Design for a Consumer Shop</Link>
              </h4>
              <p>
                <img
                  src={Reg_icon}
                  className="me-2"
                  alt="icon"
                />
                Angular Development
              </p>
            </div>
            <div className="popular-list-box">
              <ul className="nav">
                <li>Angular</li>
              </ul>
              <h4>
                $40 - $80<span>/hour</span>
              </h4>
            </div>
            <p className="popular-foot">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae architecto eveniet, dolor quo repellendus pariatur
            </p>
          </div>
        </div>
        <div className="popular-group">
          <div className="blog-image">
            <Link to="project">
              <img
                className="img-fluid"
                src={Project_29}
                alt="Post Image"
              />
            </Link>
          </div>
          <div className="popular-content-blk">
            <div className="head-popular">
              <h4>
                <Link to="project">UI/UX for Cryptocurrency Exchange</Link>
              </h4>
              <p>
                <img
                  src={Reg_icon}
                  className="me-2"
                  alt="icon"
                />
                Web Development
              </p>
            </div>
            <div className="popular-list-box">
              <ul className="nav">
                <li>Figma</li>
                <li>Adobe Xd</li>
              </ul>
              <h4>
                $80 - $180<span>/hour</span>
              </h4>
            </div>
            <p className="popular-foot">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae architecto eveniet, dolor quo repellendus pariatur
            </p>
          </div>
        </div>
        <div className="popular-group">
          <div className="blog-image">
            <Link to="project">
              <img
                className="img-fluid"
                src={Project_31}
                alt="Post Image"
              />
            </Link>
          </div>
          <div className="popular-content-blk">
            <div className="head-popular">
              <h4>
                <Link to="project">Build a Coaching Website Product </Link>
              </h4>
              <p>
                <img
                  src={Reg_icon}
                  className="me-2"
                  alt="icon"
                />
                Node JS Development
              </p>
            </div>
            <div className="popular-list-box">
              <ul className="nav">
                <li>Figma</li>
                <li>Node JS</li>
              </ul>
              <h4>
                $60 - $120<span>/hour</span>
              </h4>
            </div>
            <p className="popular-foot">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae architecto eveniet, dolor quo repellendus pariatur
            </p>
          </div>
        </div>
        </Slider>
      </div>
    </div>
  </section>
  {/* /Popular Projects */}
</>

    )
}
export default PopularProjects;