/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { Logo, Logo_img } from '../../imagepath';
const InvoiceView = () => {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Invoice
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Invoice</h2>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="card pro-post b-0">
                <div className="card-body">
                  <div className="invoice-item">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="invoice-logo">
                          <img src={Logo_img} alt="logo" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <p className="invoice-details">
                          <strong>Order:</strong> #00124 <br />
                          <strong>Issued:</strong> 20/10/2021
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Invoice Item */}
                  <div className="invoice-item">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="invoice-info">
                          <strong className="customer-text">Invoice From</strong>
                          <p className="invoice-details invoice-details-two">
                            John Doe <br />
                            806 Twin Willow Lane, Old Forge,
                            <br />
                            Newyork, USA <br />
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="invoice-info invoice-info2">
                          <strong className="customer-text">Invoice To</strong>
                          <p className="invoice-details">
                            Walter Roberson <br />
                            299 Star Trek Drive, Panama City, <br />
                            Florida, 32405, USA <br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice Item */}
                  {/* Invoice Item */}
                  <div className="invoice-item">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="invoice-info">
                          <strong className="customer-text">Payment Method</strong>
                          <p className="invoice-details invoice-details-two">
                            Debit Card <br />
                            XXXXXXXXXXXX-2541 <br />
                            HDFC Bank
                            <br />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice Item */}
                  {/* Invoice Item */}
                  <div className="invoice-item invoice-table-wrap">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="table-responsive">
                          <table className="invoice-table table table-bordered">
                            <thead>
                              <tr>
                                <th>Project</th>
                                <th>Description</th>
                                <th className="text-center">Quantity</th>
                                <th className="text-end">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Research</td>
                                <td>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit
                                </td>
                                <td className="text-center">1</td>
                                <td className="text-end">$100</td>
                              </tr>
                              <tr>
                                <td>Research 101</td>
                                <td>
                                  Lorem ipsum dolor sit amet, consectetur adipiscing
                                  elit
                                </td>
                                <td className="text-center">1</td>
                                <td className="text-end">$250</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="col-md-6 col-xl-4 ms-auto">
                        <div className="table-responsive">
                          <table className="invoice-table-two table">
                            <tbody>
                              <tr>
                                <th>Subtotal:</th>
                                <td>
                                  <span>$350</span>
                                </td>
                              </tr>
                              <tr>
                                <th>Discount:</th>
                                <td>
                                  <span>-10%</span>
                                </td>
                              </tr>
                              <tr>
                                <th>Total Amount:</th>
                                <td>
                                  <span>$315</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /Invoice Item */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
      {/* /Main Wrapper */}
    </>
  )
}
export default InvoiceView;