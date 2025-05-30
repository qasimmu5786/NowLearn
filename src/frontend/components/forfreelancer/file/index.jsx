import React , {useEffect} from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { FileLogo,IconCloud  } from "../../imagepath";
import { Sidebar } from '../sidebar';
const FreelancerFile = () => {  
  useEffect(() => {
    document.body.className = 'dashboard-page';
    return () => { document.body.className = ''; }
  });  
  return (
    <>
    {/* Page Content */}
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                  <Sidebar/>
              </StickyBox>
          </div>
          <div className="col-xl-9 col-md-8 mb-5">
            <div className="page-title">
              <h3>Manage Projects</h3>
            </div>
            <nav className="user-tabs mb-4">
              <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
              <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/freelancer-view-project-detail"
                      >
                        Overview &amp; Discussions
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link"
                        to="/freelancer-milestones"
                      >
                        Milestones
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/freelancer-task">
                        Tasks
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active" to="/freelancer-files">
                        Files
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/freelancer-payment">
                        Payments
                      </Link>
                    </li>
              </ul>
            </nav>
            {/* project list */}
            <div className="my-projects-view">
              <div className="row">
                <div className="col-lg-12">
                  <div className="pro-post">
                    <div className="project-table">
                      <div className="card-body">
                        <h4>FILES</h4>
                        <div className="table-responsive table-box">
                          <table className="table table-center table-hover datatable">
                            <thead className="thead-pink">
                              <tr>
                                <th>File Preview</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Type</th>
                                <th>Size</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <img
                                    src={FileLogo}
                                    className="img-fluid"
                                    alt="Logo"
                                  />
                                </td>
                                <td> Image for Section background</td>
                                <td>
                                  <p className="mb-0">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit
                                  </p>
                                  <Link to="#" className="read-text">
                                    Readmore
                                  </Link>
                                </td>
                                <td>Png</td>
                                <td>20KB</td>
                                <td>
                                  <Link to="#">
                                    <img
                                      src={IconCloud}
                                      className="img-fluid"
                                      alt="Logo"
                                    />
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <img
                                    src={FileLogo}
                                    className="img-fluid"
                                    alt="Logo"
                                  />
                                </td>
                                <td> Image for Section background</td>
                                <td>
                                  <p className="mb-0">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit
                                  </p>
                                  <Link to="#" className="read-text">
                                    Readmore
                                  </Link>
                                </td>
                                <td>Png</td>
                                <td>20KB</td>
                                <td>
                                  <Link  to="#">
                                    <img
                                      src={IconCloud}
                                      className="img-fluid"
                                      alt="Logo"
                                    />
                                  </Link>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="text-end mt-3">
                          <ul className="paginations">
                            <li>
                              <Link to="#">
                                {" "}
                                <i className="fas fa-angle-left" /> Previous
                              </Link>
                            </li>
                            <li>
                              <Link to="#">1</Link>
                            </li>
                            <li>
                              <Link to="#" className="active">
                                2
                              </Link>
                            </li>
                            <li>
                              <Link to="#">3</Link>
                            </li>
                            <li>
                              <Link to="#">4</Link>
                            </li>
                            <li>
                              <Link to="#">
                                Next <i className="fas fa-angle-right" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* project list */}
          </div>
        </div>
      </div>
    </div>
    {/* /Page Content */}
  </>
      )
}
export default FreelancerFile;