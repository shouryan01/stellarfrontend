import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import capturedSpeedData from '../Utils/capturedSpeedData.json';
import axios from "axios";

// function getData(): object {
//     axios.get('http://localhost:8000/api/drivers/')
//         .then(function (response) {
//             console.log(response.data);
//             return response.data
//         })
//         .catch(function (error) {
//             // handle error
//             console.log(error);
//         })
//   }

export default function Speed (): JSX.Element {
    return (
        <LineChart
            width={1000}
            height={300}
            data={capturedSpeedData["data"]}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="speed" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="speedLimit" stroke="#82ca9d" />
        </LineChart>
    )
};