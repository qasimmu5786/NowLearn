import React from 'react'
import { Link } from "react-router-dom";
function Delete () {
    return (
        <>
            {/* Delete Modal */}
            <div className="modal custom-modal fade" id="delete_category" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="form-header">
                                <h3>Delete</h3>
                                <p>Are you sure want to delete?</p>
                            </div>
                            <div className="modal-btn delete-action">
                                <div className="row">
                                    <div className="col-6">
                                        <Link
                                            to="#"
                                            className="btn btn-primary continue-btn"
                                        >
                                            Delete
                                        </Link>
                                    </div>
                                    <div className="col-6">
                                        <Link
                                            to="#"
                                            data-bs-dismiss="modal"
                                            className="btn btn-primary cancel-btn"
                                        >
                                            Cancel
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Delete Modal */}
        </>
    )
}
export default Delete;