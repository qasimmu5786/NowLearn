import React from "react";
import { Link } from "react-router-dom";
// import SimpleReactLightbox from "simple-react-lightbox";
import { about_details, home_icon, logo_details, profile_details, Tab_icon_09, Tab_icon_10, Tab_icon_11 } from "../imagepath";

const CompanyGallery = () => {
    return (
        <>
            {/* Breadcrumb */}
            <div className="bread-crumb-bar">
                <div className="container">
                    <div className="row align-items-center inner-banner">
                        <div className="col-md-12 col-12 text-center">
                            <div className="breadcrumb-list">
                                <nav aria-label="breadcrumb" className="page-breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#"><img src={home_icon} alt="" /> Home</Link></li>
                                        <li className="breadcrumb-item" aria-current="page">Employers</li>
                                        <li className="breadcrumb-item active" aria-current="page">COMPANY PROFILE</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Breadcrumb */}
            {/* Profile Banner */}
            <section className="profile-baner">
                <div className="container">
                    <div className="row">
                        <div className="col-auto">
                            <div className="profile-img">
                                <img src={profile_details} alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="profile-main">
                                <h2>Amaze Tech  PVT LTD. <i className="fas fa-check-circle" /></h2>
                                <p>Since July 2017</p>
                                <div className="about-list">
                                    <ul>
                                        <li><img src={logo_details} alt="Lang" /> UK</li>
                                        <li><i className="fas fa-map-marker-alt" /> Alabama, USA</li>
                                        <li><i className="far fa-clock" /> Poster 1 hour ago</li>
                                    </ul>
                                </div>
                                <div className="rating">
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star filled" />
                                    <i className="fas fa-star " />
                                    <i className="fas fa-star" />
                                    <span className="average-rating ml-2"> 4.6 (25)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Profile Banner */}
            {/* Page Content */}
            <div className="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="pro-view">
                                {/* Tab Detail */}
                                <nav className="provider-tabs mb-4 abouts-view">
                                    <ul className="nav nav-tabs nav-tabs-solid nav-justified">
                                        <li className="nav-item">
                                            <Link className="nav-link " to="/company-details">
                                                <img src={about_details} alt="User Image" />
                                                <p className="bg-red">About Us</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/company-project">
                                                <img src={Tab_icon_09} alt="User Image" />
                                                <p>Projects</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item ">
                                            <Link className="nav-link active-about" to="#">
                                                <img src={Tab_icon_10} alt="User Image" />
                                                <p>Gallery</p>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/company-review">
                                                <img src={Tab_icon_11} alt="User Image" />
                                                <p>Reviews</p>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
                                {/* /Tab Detail */}
                                {/* About Tab Content */}
                                <div className="pro-post widget-box company-post">
                                    <h3 className="pro-title">Gallery</h3>
                                    <div className="pro-content company-gallery">
                                        {/* <SimpleReactLightbox>
                                            <GalleryComponent />
                                        </SimpleReactLightbox> */}
                                    </div>
                                </div>
                                {/* /About Tab Content */}
                            </div>
                        </div>
                        {/* profile Sidebar */}
                        <div className="col-lg-4 col-md-12 sidebar-right theiaStickySidebar company-profile">
                            {/* About Widget */}
                            <div className="pro-post widget-box about-widget profile-overview">
                                <div className="profile-head">
                                    <h4 className="pro-title mb-0">Profile Overview</h4>
                                </div>
                                <ul className="latest-posts pro-content">
                                    <li><p>Company Name</p><h6>Amaze Tech  PVT LTD.</h6></li>
                                    <li><p>Company Established</p><h6>02-12-2005</h6></li>
                                    <li><p>No of Employees</p><h6>1500 - 1850</h6></li>
                                    <li><p>Owner Name</p><h6>Charles Dickens</h6></li>
                                    <li><p>Email</p><h6>amazetechpvt.ltd@gmail.com</h6></li>
                                    <li><p>Website</p><h6>www.amazetechpvt.ltd.com</h6></li>
                                </ul>
                                <div className="contact-btn">
                                    <Link to="#" className="btn btn-primary"><i className="fas fa-phone-alt" /> Contact</Link>
                                </div>
                            </div>
                            {/* /About Widget */}
                            {/* Company Location */}
                            <div className="pro-post widget-box location-widget">
                                <div className="profile-head">
                                    <h4 className="pro-title">Company Location</h4>
                                </div>
                                <div className="map-location">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319" />
                                </div>
                            </div>
                            {/* /Company Location */}
                            {/* Working Widget */}
                            <div className="pro-post widget-box  working-days">
                                <div className="profile-head">
                                    <h4 className="pro-title mb-0">Working Days</h4>
                                </div>
                                <ul className="latest-posts pro-content">
                                    <li><p>Monday</p><h6>9AM - 5PM</h6></li>
                                    <li><p>Tuesday </p><h6>9AM - 5PM</h6></li>
                                    <li><p>Wednesday </p><h6>9AM - 5PM</h6></li>
                                    <li><p>Thursday </p><h6>9AM - 5PM</h6></li>
                                    <li><p>Friday </p><h6>9AM - 5PM</h6></li>
                                    <li><p>Saturday </p><h6>9AM - 5PM</h6></li>
                                    <li><p>Sunday </p><h6><span>Close</span></h6></li>
                                </ul>
                            </div>
                            {/* /Working Widget */}
                            {/* Social Widget */}
                            <div className="pro-post widget-box social-widget">
                                <div className="profile-head">
                                    <h4 className="pro-title">SOCIAL LINKS</h4>
                                </div>
                                <ul className="social-link-profile">
                                    <li><Link to="#"><i className="fab fa-facebook" /></Link></li>
                                    <li><Link to="#"><i className="fab fa-twitter" /></Link></li>
                                    <li><Link to="#"><i className="fab fa-instagram" /></Link></li>
                                    <li><Link to="#"><i className="fab fa-linkedin" /></Link></li>
                                    <li><Link to="#"><i className="fab fa-telegram" /></Link></li>
                                </ul>
                            </div>
                            {/* /Social Widget */}
                        </div>
                        {/* /Profile Sidebar */}
                    </div>
                </div>
            </div>
            {/* /Page Content */}
            
            {/* /Main Wrapper */}
        </>
    );
}
export default CompanyGallery;