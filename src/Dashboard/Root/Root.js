import React from 'react';
import { Outlet } from 'react-router-dom';
import RightBar from '../Share/RightSide/RightBar';
import TopBar from '../Share/TopBar/TopBar';

const Root = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 left-side">
                        <RightBar></RightBar>
                    </div>
                    <div className="col-md-9 right-side">
                        <TopBar></TopBar>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Root;