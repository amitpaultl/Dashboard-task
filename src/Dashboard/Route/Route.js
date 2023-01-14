import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Attendance from '../Page/Attendance/Attendance';
import Dashboard from '../Page/Dashboard/Dashboard';

import Root from '../Root/Root';

const Route = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path: '/',
                element:<Dashboard></Dashboard>
            },
            {
                path: '/attendance',
                element:<Attendance></Attendance>
            },
         
            
            
        ]
    }

])

export default Route;