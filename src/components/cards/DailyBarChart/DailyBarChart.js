import React, { useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    Rectangle,
    Cell,
    YAxis,
    CartesianGrid,
    ResponsiveContainer
} from "recharts";
import './DailyBarChart.css'
const data = [
    {
        name: "S",
        pv: 240,
        amt: 240
    },
    {
        name: "M",

        pv: 339,
        amt: 221
    },
    {
        name: "T",

        pv: 580,
        amt: 229
    },
    {
        name: "W",

        pv: 390,
        amt: 200
    },
    {
        name: "T",

        pv: 480,
        amt: 218
    },
    {
        name: "F",
        pv: 250,
        amt: 250
    },
    {
        name: "S",
        pv: 380,
        amt: 250
    },
    {
        name: "M",

        pv: 339,
        amt: 221
    },
    {
        name: "T",

        pv: 580,
        amt: 229
    },
    {
        name: "W",

        pv: 390,
        amt: 200
    },
];

const DailyBarChart = () => {
    return (
        <div className="DailyBarChart">
            <div className="flex-space">
                <p className="graph-title">Daily Training Completions</p>
                <p style={{ color: "#0F2552", fontWeight: 400 }} className="graph-title">Last 7 Days</p>
            </div>
            <ResponsiveContainer
                width='100%'
                height={215}
            >
                <BarChart
                    data={data}
                    margin={{
                        top: 10,
                        right: -3,
                        left: -5,
                        bottom: -10
                    }}
                    barSize={8.7}
                >
                    <CartesianGrid strokeDasharray="3 0" horizontal vertical={false} />
                    <XAxis dataKey="name" fontSize={'12px'} interval={0} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="pv"
                        stackId="a"
                        fill="#0D62FF"
                    />
                    <Bar dataKey="amt" stackId="a" fill="#E7EFFF" radius={[50, 50, 0, 0]} />

                </BarChart >
            </ResponsiveContainer>
        </div>
    )
}

export default DailyBarChart