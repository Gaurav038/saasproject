import React, { useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    Rectangle,
    Cell,
    YAxis,
    ResponsiveContainer
} from "recharts";
import './BiWeekBarChart.css'
const data = [
    {
        name: "3 jun",
        pv: 2400,
        amt: 2400
    },
    {
        name: "4 jun",

        pv: 3398,
        amt: 2210
    },
    {
        name: "5 jun",

        pv: 5800,
        amt: 2290
    },
    {
        name: "6 jun",

        pv: 3908,
        amt: 2000
    },
    {
        name: "7 jun",

        pv: 4800,
        amt: 2181
    },
    {
        name: "8 jun",
        pv: 2500,
        amt: 2500
    },
    {
        name: "9 jun",
        pv: 3800,
        amt: 2500
    },
    {
        name: "10 jun",
        pv: 3000,
        amt: 2500
    },
    {
        name: "11 jun",
        pv: 3900,
        amt: 2500
    },
    {
        name: "12 jun",
        pv: 3780,
        amt: 2500
    },
    {
        name: "13 jun",
        pv: 3230,
        amt: 2500
    },
    {
        name: "14 jun",
        pv: 3500,
        amt: 2500
    },

];

const BiWeekBarChart = () => {
    return (
        <div className="BiWeekBarChart">
            <div className="flex-space">
                <p className="graph-title">Last 14 Days Active Workers In Training</p>
                <p style={{ fontWeight: 400 }} className="graph-title">Last 14 Days</p>
            </div>
            <ResponsiveContainer
                width='100%'
                height={313}
            >
                <BarChart

                    data={data}
                    margin={{
                        top: 10,
                        right: 0,
                        left: 0,
                        bottom: -10
                    }}
                    barSize={18}
                >
                    <XAxis dataKey="name" fontSize={'12px'} axisLine={false} tickLine={false} interval={0} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Bar dataKey="pv"
                        shape={<Rectangle radius={[50, 50, 50, 50]} />}
                        background={{ fill: '#E7EFFF', radius: [50, 50, 50, 50] }}
                    >

                        {data.map((entry, index) => (
                            <Cell
                                fill={"#1B59F8"}
                            />
                        ))}
                    </Bar>
                </BarChart >
            </ResponsiveContainer>
        </div>
    )
}

export default BiWeekBarChart