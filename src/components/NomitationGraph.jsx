import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

import { movieItems } from "../lib/data";

const aggregatedData = movieItems
    .reduce((acc, item) => {
        const existing = acc.find((entry) => entry.year === item.year);
        if (existing) {
            existing.oscar_nominations += item.oscar_nominations;
            existing.oscar_winning += item.oscar_winning;
        } else {
            acc.push({ ...item });
        }
        return acc;
    }, [])
    .sort((a, b) => a.year - b.year);

    const formatLegendValue = (value) => {
    return value.charAt(0).toUpperCase() + value.slice(1);

};
const OscarStatisticsOverview = () => {
    return (
        <>
            <div
                className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                }}
            >
                <h2 className="text-lg font-medium text-gray-500 mb-4">
                    Oscar Statistics Overview by Year
                </h2>
                <div
                    style={{
                        overflowX: "auto",
                        overflowY: "hidden",
                        width: "100%",
                        paddingBottom: "1rem",
                    }}
                >
                    <ResponsiveContainer height={350}>
                        <BarChart data={aggregatedData}>
                            <XAxis
                                dataKey="year"
                                tickSize={0}
                                padding={{ left: 10 }}
                                axisLine={false}
                                tick={{
                                    fontSize: 14,
                                }}
                            />
                            <YAxis
                                padding={{ bottom: 10, top: 10 }}
                                tickCount={6}
                                axisLine={false}
                                tickSize={0}
                                tick={{
                                    fontSize: 14,
                                }}
                            />
                            <Tooltip
                                cursor={false}
                                contentStyle={{
                                    backgroundColor: "white",
                                    border: "1px solid #ddd",
                                }}
                            />
                            <Legend
                                iconType="circle"
                                iconSize={10}
                                verticalAlign="top"
                                align="right"
                                formatter={formatLegendValue}
                            />
                            <Bar
                                dataKey="oscar_nominations"
                                fill="#475be8"
                                activeBar={false}
                                isAnimationActive={false}
                                barSize={24}
                                radius={[4, 4, 4, 4]}
                            />
                            <Bar
                                dataKey="oscar_winning"
                                fill="#bdc4e7"
                                activeBar={false}
                                isAnimationActive={false}
                                barSize={24}
                                radius={[4, 4, 4, 4]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    );
};

export default OscarStatisticsOverview;
