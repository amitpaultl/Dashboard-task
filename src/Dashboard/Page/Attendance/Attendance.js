import React from 'react';
import './Attendance.css'
import setting from '../../Image/sitting.png'
const Attendance = () => {
    return (
        <div>
            <div className="attendance-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h2 className='title-dashboard'>Attendance</h2>

                        </div>
                        <div className="col-md-6">
                            <div className="title-right">
                                <button>Download Report</button>
                                <img src={setting} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="input-tex-box">

                                <div className="input-area">
                                    <input type="date" />
                                </div>
                                <div className="input-area">
                                    <input type="text" placeholder='Department' />
                                </div>
                                <div className="input-area">
                                    <select >
                                        <option value="Attendance">Attendance</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>

                                </div>
                                <div className="input-area">
                                    <select >
                                        <option value="Present">Present</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="input-tex-box">

                                <div className="input-area">
                                    <input type="text" placeholder='Check In' />
                                </div>
                                <div className="input-area">
                                    <input type="text" placeholder='Location' />
                                </div>
                                <div className="input-area">
                                    <select >
                                        <option value="Attendance">Designation</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>

                                </div>
                                <div className="input-area">
                                    <select >
                                        <option value="Present">Department</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="employee">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Employee Name</th>
                                            <th>Department</th>
                                            <th>Check in</th>
                                            <th>Check Out</th>
                                            <th>Remark</th>
                                            <th>Hours</th>
                                            <th>Overtime</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                        <tr>
                                            <td class="product-thumbnail">
                                                t
                                            </td>
                                            <td class="product-name">n</td>
                                            <td class="product-price-cart">p</td>
                                            <td class="product-quantity">
                                                k
                                            </td>
                                            <td class="product-subtotal">s</td>
                                            <td class="product-remove">
                                                r
                                            </td>
                                            <td class="product-remove">
                                                r
                                            </td>
                                            <td class="product-remove">
                                                r
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Attendance;