/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import Sidebar from '../../../commoncomponent/sidebar'
const EmailSettings = () => {
  return (
    <>
      <div className='main-wrapper'>
        <Sidebar />
        {/* Page Wrapper */}
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row">
                <div className="col-sm-6">
                  <h3 className="page-title">Settings</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/admin/index">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/admin/settings">Settings</Link>
                    </li>
                    <li className="breadcrumb-item active">Email Settings</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                {/* Settings Menu */}
                <div className="settings-menu-links">
                  <ul className="nav nav-tabs menu-tabs">
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin/settings">
                        General Settings
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin/alocalization-details">
                        Localization
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin/payment-settings">
                        Payment Settings
                      </Link>
                    </li>
                    <li className="nav-item active">
                      <Link className="nav-link" to="/admin/email-settings">
                        Email Settings
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin/social-settings">
                        Social Media Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin/social-links">
                        Social Links
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin/seo-settings">
                        SEO Settings
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin/others-settings">
                        Others
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Settings Menu */}
                <div className="row">
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-body pt-0">
                        <div className="card-header d-flex justify-content-between align-items-center">
                          <h5 className="card-title">PHP Mail</h5>
                          <div className="status-toggle d-flex justify-content-between align-items-center">
                            <input type="checkbox" id="status_1" className="check" />
                            <label htmlFor="status_1" className="checktoggle">
                              checkbox
                            </label>
                          </div>
                        </div>
                        <form>
                          <div className="settings-form">
                            <div className="form-group form-placeholder">
                              <label>
                                Email From Address <span className="star-red">*</span>
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="form-group form-placeholder">
                              <label>
                                Email Password <span className="star-red">*</span>
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="form-group form-placeholder">
                              <label>
                                Emails From Name <span className="star-red">*</span>
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="form-group mb-0">
                              <div className="settings-btns">
                                <button type="submit" className="btn btn-orange">
                                  Submit
                                </button>
                                <button type="submit" className="btn btn-grey">
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card">
                      <div className="card-body pt-0">
                        <div className="card-header d-flex justify-content-between align-items-center">
                          <h5 className="card-title">SMTP</h5>
                          <div className="status-toggle d-flex justify-content-between align-items-center">
                            <input
                              type="checkbox"
                              id="status_2"
                              className="check"
                              defaultChecked=""
                            />
                            <label htmlFor="status_2" className="checktoggle">
                              checkbox
                            </label>
                          </div>
                        </div>
                        <form>
                          <div className="settings-form">
                            <div className="form-group form-placeholder">
                              <label>
                                Email From Address <span className="star-red">*</span>
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="form-group form-placeholder">
                              <label>
                                Email Password <span className="star-red">*</span>
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="form-group form-placeholder">
                              <label>
                                Email Host <span className="star-red">*</span>
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="form-group form-placeholder">
                              <label>
                                Email Port <span className="star-red">*</span>
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                            <div className="form-group mb-0">
                              <div className="settings-btns">
                                <button type="submit" className="btn btn-orange">
                                  Submit
                                </button>
                                <button type="submit" className="btn btn-grey">
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>

  )
}

export default EmailSettings