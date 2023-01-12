import React from 'react';
import './Dashboard.css'
import friend from '../../Image/image 5.png'
import prople from '../../Image/image 5 (1).png'
import prople2 from '../../Image/image 13.png'
import prople3 from '../../Image/image 6.png'
import prople4 from '../../Image/image 7.png'
import prople5 from '../../Image/image 8.png'
import prople6 from '../../Image/image 9.png'
import ProgressBar from 'react-bootstrap/ProgressBar';

const Dashboard = () => {
    const now = 60;
    return (
        <div>
            <div className="dashboard-area">
                <div className="container">
                    <div className="row">
                        <h2 className='title-dashboard'>Dashboard</h2>
                        <p className='section-title'>Company Status</p>
                        <div className="col-md-3">
                            <div className="company-info">
                                <img src={friend} alt="" />
                                <span>Total Employee</span>
                                <div className="view-count">
                                    <h2>450</h2>
                                    <button>View All</button>
                                </div>
                                <div className="mamber">
                                    <img src={prople} alt="" />
                                    <img src={prople3} alt="" />
                                    <img src={prople4} alt="" />
                                    <img src={prople5} alt="" />
                                    <img src={prople6} alt="" />
                                    <img src={prople2} alt="" />

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="company-info">
                                <img src={friend} alt="" />
                                <span>Total Employee</span>
                                <div className="view-count">
                                    <h2>450</h2>
                                    <button>View All</button>
                                </div>
                                <div className="mamber">
                                    <img src={prople} alt="" />
                                    <img src={prople3} alt="" />
                                    <img src={prople4} alt="" />
                                    <img src={prople5} alt="" />
                                    <img src={prople6} alt="" />
                                    <img src={prople2} alt="" />

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="company-info">
                                <img src={friend} alt="" />
                                <span>Total Employee</span>
                                <div className="view-count">
                                    <h2>450</h2>
                                    <button>View All</button>
                                </div>
                                <div className="mamber">
                                    <img src={prople} alt="" />
                                    <img src={prople3} alt="" />
                                    <img src={prople4} alt="" />
                                    <img src={prople5} alt="" />
                                    <img src={prople6} alt="" />
                                    <img src={prople2} alt="" />

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="company-info">
                                <img src={friend} alt="" />
                                <span>Total Employee</span>
                                <div className="view-count">
                                    <h2>450</h2>
                                    <button>View All</button>
                                </div>
                                <div className="mamber">
                                    <img src={prople} alt="" />
                                    <img src={prople3} alt="" />
                                    <img src={prople4} alt="" />
                                    <img src={prople5} alt="" />
                                    <img src={prople6} alt="" />
                                    <img src={prople2} alt="" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* expense-area */}

                <div className="expense-part">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="expense-area">
                                    <p className='title-expense'>Expense Report</p>

                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="progress">
                                <ProgressBar now={now} label={`${now}%`} />;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
};

export default Dashboard;