import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import iconMenu from '../../Image/Vector.png'
import iconMenu2 from '../../Image/Vector1.png'
import iconMenu3 from '../../Image/GearSix.png'
import Accordion from 'react-bootstrap/Accordion';
import './Rightbar.css'
import { context } from '../../Context/context';

const RightBar = () => {

    const {btu} = useContext(context)

    console.log(btu);
    return (
        <div className="right-area" style={{left: btu ?  '-256px' :  "0"}}>
            <div className="">
                <div>
                    {/* logo area */}
                    <h1 className="logo">Place A Logo </h1>
                    {/* menu area */}
                    <div className="menu-area">
                        <ul>
                            <li>
                                <Link to={'/'}>
                                    <img src={iconMenu} alt="" />
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to={'/attendance'}>
                                    <img src={iconMenu} alt="" />
                                    Attendance
                                </Link>
                            </li>

                            <li>
                                <Link >
                                    <img src={iconMenu} alt="" />
                                    Leaves
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <img src={iconMenu} alt="" />
                                    Expense
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <img src={iconMenu} alt="" />
                                    Notice
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <img src={iconMenu} alt="" />
                                    Departments
                                </Link>
                            </li>



                        </ul>
                    </div>
                    <div className="accordon-area">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> <img src={iconMenu3}  alt="" /> Settings </Accordion.Header>
                                <Accordion.Body>
                                    <ul className="accrd">
                                        <li>Approval</li>
                                        <li>Leave</li>
                                        <li>Office Setting</li>
                                        <li>My Subscriptions</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>

                    <div className='logout'>
                        <img className='logout-icon' src={iconMenu2} alt="" />
                        <button>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightBar;