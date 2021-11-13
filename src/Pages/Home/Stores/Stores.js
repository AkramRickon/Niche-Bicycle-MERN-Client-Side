import React from 'react';
import './stores.css';

const Stores = () => {
    return (
        <div className="container custom-color-store mb-5 rounded p-3">
            <div className="row g-2">
                <div className="col-lg-6">
                    <h1 className=" text-center">Our <span className="custom-color">Stores</span></h1>
                    <div className="p-3  ">
                        <ul className="list-group ">
                            <li className="list-group-item   d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Dhaka</div>

                                </div>
                                <span className="badge bg-primary rounded-pill">10</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Khulna</div>

                                </div>
                                <span className="badge bg-primary rounded-pill">5</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Chattogram</div>

                                </div>
                                <span className="badge bg-primary rounded-pill">7</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Sylhet</div>

                                </div>
                                <span className="badge bg-primary rounded-pill">5</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Rajsahi</div>

                                </div>
                                <span className="badge bg-primary rounded-pill">3</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Barishal</div>

                                </div>
                                <span className="badge bg-primary rounded-pill">2</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                <div className="ms-2 me-auto">
                                    <div className="fw-bold">Rangpur</div>

                                </div>
                                <span className="badge bg-primary rounded-pill">3</span>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="col-lg-6 ">
                    <div className="p-4">
                        <div className="d-flex">
                            <div>
                                <h1 className="">LET'S STAY IN TOUCH</h1>
                                <h5 className="my-4">Get updates on sales, specials and more</h5>
                                <input className="form-control" type="email" placeholder="Your email" /><br />
                                <input className="form-control" type="tel" placeholder="Phone number" /><br />
                                <div className="text-center"><button class="btn btn-danger py-1 px-4 fs-5 rounded-3">Submit</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stores;