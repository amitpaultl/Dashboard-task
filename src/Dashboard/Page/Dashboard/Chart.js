
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, ReferenceLine } from 'recharts';

// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Chart = () => {

    const data = [
        {
            "name": "Nov 1",
            "uv": 4000,
            "pv": 2400,
            "amt": 2400
        },
        {
            "name": "Nov 4",
            "uv": 3000,
            "pv": 1398,
            "amt": 2210
        },
        {
            "name": "Nov 8",
            "uv": 2000,
            "pv": 9800,
            "amt": 2290
        },
        {
            "name": "Nov 12",
            "uv": 2780,
            "pv": 3908,
            "amt": 2000
        },
        {
            "name": "Nov 16",
            "uv": 1890,
            "pv": 4800,
            "amt": 2181
        },
        {
            "name": "Nov 20",
            "uv": 2390,
            "pv": 3800,
            "amt": 2500
        },
        {
            "name": "Nov 24",
            "uv": 3490,
            "pv": 4300,
            "amt": 2100
        }
    ]



    return (
        <div>
            <div className="date-btu">
                <div className="date">
                    <p className='active'>Day</p>
                    <p>Week</p>
                    <p>Month</p>
                    <p>Year</p>
                </div>
                <button>Export Details</button>
            </div>
            <h3 className="tk">
                ৳45,000
            </h3>


            
            <ResponsiveContainer width='100%' height={200}>
                <AreaChart width={516} height={150} data={data}
                    margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>

            

        </div>
    );
};

export default Chart;