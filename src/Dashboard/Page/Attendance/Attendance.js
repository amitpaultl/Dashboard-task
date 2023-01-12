import React from 'react';
import './Attendance.css'
import setting from '../../Image/sitting.png'
import file from '../../Image/FileDoc.png'
import visbal from '../../Image/Vector (1).png'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
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
                    <div className="employee-area1">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="employee">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th><input type="checkbox" /></th>
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
                                                <td></td>
                                                <td class="product-thumbnail">
                                                    Jahid Hasan
                                                </td>
                                                <td class="product-name">HR & Admin</td>
                                                <td>
                                                    <span class="green-btu">06.05pm</span>

                                                </td>
                                                <td >
                                                    <span class="green-btu">06.05pm</span>

                                                </td>
                                                <td class="product-subtotal">
                                                </td>
                                                <td class="product-remove">

                                                </td>
                                                <td class="product-remove">

                                                </td>
                                                <td class="product-remove">
                                                    <img src={visbal} alt="" />

                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" /></td>
                                                <td class="product-thumbnail">
                                                    Jahid Hasan
                                                </td>
                                                <td class="product-name">HR & Admin</td>
                                                <td>
                                                    <span class="red-btu">06.05pm</span>

                                                </td>
                                                <td >
                                                    <span class="red-btu">06.05pm</span>

                                                </td>
                                                <td class="product-subtotal">
                                                    <img src={file} alt="" />
                                                </td>
                                                <td class="product-remove">

                                                </td>
                                                <td class="product-remove">

                                                </td>
                                                <td class="product-remove">
                                                    <img src={visbal} alt="" />

                                                </td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td class="product-thumbnail">
                                                    Jahid Hasan
                                                </td>
                                                <td class="product-name">HR & Admin</td>
                                                <td>
                                                    <span class="green-btu">06.05pm</span>

                                                </td>
                                                <td >
                                                    <span class="green-btu">06.05pm</span>

                                                </td>
                                                <td class="product-subtotal">
                                                </td>
                                                <td class="product-remove">

                                                </td>
                                                <td class="product-remove">

                                                </td>
                                                <td class="product-remove">
                                                    <img src={visbal} alt="" />

                                                </td>
                                            </tr>
                                            <tr>
                                                <td><input type="checkbox" /></td>
                                                <td class="product-thumbnail">
                                                    Jahid Hasan
                                                </td>
                                                <td class="product-name">HR & Admin</td>
                                                <td>
                                                    <span class="red-btu">06.05pm</span>

                                                </td>
                                                <td >
                                                    <span class="red-btu">06.05pm</span>

                                                </td>
                                                <td class="product-subtotal">
                                                    <img src={file} alt="" />
                                                </td>
                                                <td class="product-remove">

                                                </td>
                                                <td class="product-remove">

                                                </td>
                                                <td class="product-remove">
                                                    <img src={visbal} alt="" />

                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* pagination area */}
                            <div className="col-md-12">
                                <div className="pagination-area">
                                    <button><AiOutlineLeft></AiOutlineLeft></button>
                                    <button className='active'>1</button>
                                    <button>2</button>
                                    <button>3</button>
                                    <button>4</button>
                                    <button>5</button>
                                    <button><AiOutlineRight></AiOutlineRight></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Attendance;