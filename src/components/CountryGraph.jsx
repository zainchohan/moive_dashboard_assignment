import React, { useState } from "react";
import {
    PieChart,
    Pie,
    Tooltip,
    Legend,
    Cell,
    ResponsiveContainer,
} from "recharts";
import { movieItems } from "../lib/data";

const COLORS = [
    "#475be8",
    "#6574f5",
    "#8490f7",
    "#a6b1fa",
    "#7d8bd5",
    "#2239d782",
];

const PieChartComponent = () => {
    const [filter, setFilter] = useState("language");
    const [filterValue, setFilterValue] = useState("");

    const getDataForFilter = () => {
        let filterData = [];

        if (filter === "language") {
            filterData = movieItems.reduce((acc, movie) => {
                const language = movie.language || "Unknown";
                if (acc[language]) {
                    acc[language] += 1;
                } else {
                    acc[language] = 1;
                }
                return acc;
            }, {});
        }

        if (filter === "country") {
            filterData = movieItems.reduce((acc, movie) => {
                const country = movie.country || "Unknown";
                if (acc[country]) {
                    acc[country] += 1;
                } else {
                    acc[country] = 1;
                }
                return acc;
            }, {});
        }

        return Object.keys(filterData).map((key, index) => ({
            name: key,
            value: filterData[key],
            color: COLORS[index % COLORS.length],
        }));
    };

    const pieData = getDataForFilter();

    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        outerRadius,
        percent,
        name,
    }) => {
        const RADIAN = Math.PI / 180;
        const radius = outerRadius + 20;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="#333"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
                style={{
                    fontSize: "10px",
                    fontWeight: "500",
                }}
            >
                {`${name} (${(percent * 100).toFixed(0)}%)`}
            </text>
        );
    };

    const handleFilterChange = (filterType) => {
        setFilter(filterType);
        setFilterValue("");
    };

    const handleFilterValueChange = (value) => {
        setFilterValue(value);
    };

    const filteredData = pieData.filter((data) => {
        if (filterValue === "") return true;
        return data.name === filterValue;
    });

    return (
        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                <h2 className="text-lg font-semibold text-gray-500 mb-4">
                    Country and Language Insights
                </h2>
                <div style={{ marginBottom: "20px" }}>
                    <button
                        onClick={() => handleFilterChange("language")}
                        style={{
                            padding: "10px 20px",
                            fontSize: "14px",
                            backgroundColor:
                                filter === "language" ? "#475be8" : "#ccc",
                            color: "#fff",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        By Language
                    </button>
                    <button
                        onClick={() => handleFilterChange("country")}
                        style={{
                            padding: "10px 20px",
                            fontSize: "14px",
                            backgroundColor:
                                filter === "country" ? "#475be8" : "#ccc",
                            color: "#fff",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        By Country
                    </button>
                </div>
            </div>
            <div style={{ width: "100%", height: "400px", marginTop: "0" }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={filteredData}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            label={renderCustomizedLabel}
                            labelLine={true}
                        >
                            {filteredData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.color}
                                    style={{ outline: "none" }}
                                />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{
                                fontSize: "12px",
                                padding: "5px",
                            }}
                        />
                        <Legend
                            iconType="circle"
                            iconSize={10}
                            verticalAlign="bottom"
                            align="left"
                            wrapperStyle={{
                                fontSize: "12px",
                                color: "#555",
                            }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PieChartComponent;
