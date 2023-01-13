import React, { useContext, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { BiCalendar, BiMenu } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import userimg from '../../Image/Unsplash-Avatars_0002s_0001_ivan-stern-xlP76AXGQ4A-unsplash.png'
import './TopBar.css'
import { context } from '../../Context/context';
const TopBar = () => {

    const {setBtu} = useContext(context)

    const togglebtu =()=>{
        setBtu(crenty => !crenty)
    }
    

    return (
        <div>
            <div className="top-area">
                <div className="search-area">
                    <input type="text" placeholder='SEARCH' />
                    <div className="icon-search">
                        <CiSearch></CiSearch>
                    </div>
                </div>
                <div className="user-icon">
                    <span className="celander">
                        <BiCalendar></BiCalendar>
                    </span>
                    <span className="notification">

                        <IoMdNotificationsOutline></IoMdNotificationsOutline>
                    </span>
                    
                    <span className="user-img">
                        <img src={userimg} alt="" />
                    </span>

                    <span className='toggle-btu' onClick={togglebtu}>
                        <BiMenu></BiMenu>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default TopBar;