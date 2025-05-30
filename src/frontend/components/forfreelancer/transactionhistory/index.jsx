import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { home_icon } from "../../imagepath";
import { Sidebar } from "../sidebar";
import Select from "react-select";

const Transactionhistory = () => {
  const options = [
    { value: 1, label: "5" },
    { value: 2, label: "4" },
    { value: 3, label: "3" },
    { value: 4, label: "6" },
    { value: 5, label: "3" },
  ];
  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });

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
                    <li className="breadcrumb-item">
                      <Link to="#">
                        <img src={home_icon} alt="Post Author" /> Home
                      </Link>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      FREELANCER
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      PAYMENTS
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content content-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar />
              </StickyBox>
            </div>
            <div className="col-xl-9 col-md-8">
              <nav className="user-tabs mb-4">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li className="nav-item">
                    <Link className="nav-link" to="/freelancer-withdraw-money">
                      Withdraw Funds
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/freelancer-invoices">
                      {" "}
                      Invoices
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to="/freelancer-transaction-history"
                    >
                      {" "}
                      Transaction History
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="transaction-table card">
                <div className="card-header">
                  <div className="row justify-content-between align-items-center">
                    <div className="col">
                      <h5 className="card-title">All Transactions</h5>
                    </div>
                    <div className="col-auto d-flex align-items-center flex-wrap transaction-shortby">
                      <div className="sort-by sort-show">
                        <span className="sort-title">Show</span>
                        <span className="sortby-fliter">
                          <Select
                            className="select"
                            options={options}
                            placeholder="5"
                          />
                        </span>
                      </div>
                      <div className="export-item sort-show sort-by">
                        <i className="fas fa-download" /> Export
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="table-responsive table-box">
                    <table className="table">
                      <thead>
                        <tr className="thead-pink">
                          <th>Invoice Number</th>
                          <th>Client Name</th>
                          <th>Created Date</th>
                          <th>Amount</th>
                          <th>Due Date</th>
                          <th>Status</th>
                          <th>Paid On</th>
                        </tr>
                      </thead>
                      <tbody className="table table-hover table-center">
                        <tr>
                          <td>
                            <Link to="/view-invoice" className="invoice-id">
                              INV-5622
                            </Link>
                          </td>
                          <td>Amaze Tech</td>
                          <td>16 Sep 2021</td>
                          <td>$150</td>
                          <td>22 Oct 2021</td>
                          <td>
                            <span className="badge bg-success-light">Paid</span>
                          </td>
                          <td>22 Oct 2021, 10:45pm</td>
                        </tr>
                        <tr>
                          <td>
                            <Link to="/view-invoice" className="invoice-id">
                              INV-4545
                            </Link>
                          </td>
                          <td>Park Inc</td>
                          <td>12 Sep 2021</td>
                          <td>$150</td>
                          <td>25 Oct 2021</td>
                          <td>
                            <span className="badge bg-warning-light">
                              Partially Paid
                            </span>
                          </td>
                          <td>25 Oct 2021, 10:45pm</td>
                        </tr>
                        <tr>
                          <td>
                            <Link to="/view-invoice" className="invoice-id">
                              INV-2254
                            </Link>
                          </td>
                          <td>Tech Zone </td>
                          <td>10 Sep 2021</td>
                          <td>$150</td>
                          <td>15 Oct 2021</td>
                          <td>
                            <span className="badge bg-success-light">Paid</span>
                          </td>
                          <td>10 Oct 2021, 10:45pm</td>
                        </tr>
                        <tr>
                          <td>
                            <Link to="/view-invoice" className="invoice-id">
                              INV-1582
                            </Link>
                          </td>
                          <td>Abc Software</td>
                          <td>13 Sep 2021</td>
                          <td>$150</td>
                          <td>28 Oct 2021</td>
                          <td>
                            <span className="badge bg-danger-light">
                              Overdue
                            </span>
                          </td>
                          <td>13 Oct 2021, 10:45pm</td>
                        </tr>
                        <tr>
                          <td>
                            <Link to="/view-invoice" className="invoice-id">
                              INV-1526
                            </Link>
                          </td>
                          <td>Host Technologies</td>
                          <td>12 Sep 2021</td>
                          <td>$150</td>
                          <td>29 Oct 2021</td>
                          <td>
                            <span className="badge bg-warning-light">
                              Partially Paid
                            </span>
                          </td>
                          <td>29 Oct 2021, 10:45pm</td>
                        </tr>
                        <tr>
                          <td>
                            <Link to="/view-invoice" className="invoice-id">
                              INV-1200
                            </Link>
                          </td>
                          <td>Alfred Tech </td>
                          <td>05 Sep 2021</td>
                          <td>$150</td>
                          <td>15 Oct 2021</td>
                          <td>
                            <span className="badge bg-warning-light">
                              Partially Paid
                            </span>
                          </td>
                          <td>15 Oct 2021, 10:45pm</td>
                        </tr>
                        <tr>
                          <td>
                            <Link to="/view-invoice" className="invoice-id">
                              INV-1212
                            </Link>
                          </td>
                          <td>Kind Softwares </td>
                          <td>02 Sep 2021</td>
                          <td>$150</td>
                          <td>22 Oct 2021</td>
                          <td>
                            <span className="badge bg-success-light">Paid</span>
                          </td>
                          <td>22 Oct 2021, 10:45pm</td>
                        </tr>
                        <tr>
                          <td>
                            <Link to="/view-invoice" className="invoice-id">
                              INV-1456
                            </Link>
                          </td>
                          <td>Tech Zone </td>
                          <td>10 Sep 2021</td>
                          <td>$150</td>
                          <td>15 Oct 2021</td>
                          <td>
                            <span className="badge bg-danger-light">
                              Overdue
                            </span>
                          </td>
                          <td>10 Oct 2021, 10:45pm</td>
                        </tr>
                        <tr>
                          <td>
                            <Link to="/view-invoice" className="invoice-id">
                              INV-1236
                            </Link>
                          </td>
                          <td>Abc Software</td>
                          <td>13 Sep 2021</td>
                          <td>$150</td>
                          <td>28 Oct 2021</td>
                          <td>
                            <span className="badge bg-danger-light">
                              Overdue
                            </span>
                          </td>
                          <td>13 Oct 2021, 10:45pm</td>
                        </tr>
                        <tr>
                          <td>
                            <Link to="/view-invoice" className="invoice-id">
                              INV-1566
                            </Link>
                          </td>
                          <td>Park Inc</td>
                          <td>12 Sep 2021</td>
                          <td>$150</td>
                          <td>25 Oct 2021</td>
                          <td>
                            <span className="badge bg-success-light">Paid</span>
                          </td>
                          <td>25 Oct 2021, 10:45pm</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};
export default Transactionhistory;
