import React, { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';


const Dashboard = () => {
    const data = [
        {
            "name": "Mar",
            "investment": 100000,
            "value": 241,
            "revenue": 10401
        },
        {
            "name": "Apr",
            "investment": 200000,
            "value": 423,
            "revenue": 24500
        },
        {
            "name": "May",
            "investment": 500000,
            "value": 726,
            "revenue": 67010
        },
        {
            "name": "Jun",
            "investment": 500000,
            "value": 529,
            "revenue": 40405
        },
        {
            "name": "Jul",
            "investment": 600000,
            "value": 601,
            "revenue": 50900
        },
        {
            "name": "Aug",
            "investment": 700000,
            "value": 670,
            "revenue": 61000
        }
    ]

    return (
        <div className='container mx-auto'>
            <div>
                <button className='my-16 bg-purple-100 px-16 py-2 text-purple-700 font-bold rounded-full border-solid border-2 border-purple-500'>Pie Chart</button>
            </div>
            <div className='mx-auto'>
                <PieChart width={730} height={250}>
                    <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="green" />
                    <Pie data={data} dataKey="investment" nameKey="revenue" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="red" label />
                    <Tooltip />
                </PieChart>
            </div>
            <div>
                <button className='my-16 bg-blue-100 px-16 py-2 text-blue-700 font-bold rounded-full border-solid border-2 border-blue-500'>Line Chart</button>
            </div>
            <div>
                <LineChart width={730} height={250} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="investment" stroke="red" />
                    <Line type="monotone" dataKey="revenue" stroke="green" />
                </LineChart>
            </div>
        </div>
    );
};

export default Dashboard;