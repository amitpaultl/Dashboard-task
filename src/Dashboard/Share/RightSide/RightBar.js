import React from 'react';
import { Link } from 'react-router-dom';
import iconMenu from '../../Image/Vector.png'
import iconMenu2 from '../../Image/Vector1.png'
import Accordion from 'react-bootstrap/Accordion';
import './Rightbar.css'

const RightBar = () => {
    return (
        <div>
            <div className="right-area">
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
                                <Link>
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
                    {/* <div className="accordon-area">
                        <div class="accordion" id="accordionPanelsStayOpenExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        Accordion Item #1
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div class="accordion-body">
                                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        Accordion Item #2
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                    <div class="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                    <div class="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

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