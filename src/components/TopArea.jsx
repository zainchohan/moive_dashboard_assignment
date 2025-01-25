import React from "react";
import { movieItems } from "../lib/data";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const TopArea = () => {
    const Card = ({ number, title, chartData, colors }) => (
        <div className="flex flex-row md:flex-row justify-between items-center p-4 rounded-lg shadow-sm bg-white hover:shadow-md transition-shadow duration-300">
            <div className="flex flex-col items-center md:items-start md:w-1/2 mb-4 md:mb-0">
                <h2 className="text-lg font-medium text-gray-500 mb-2">
                    {title}
                </h2>
                <p className="text-4xl font-semibold text-gray-800">{number}</p>
            </div>
            <div>
                <PieChart width={100} height={100}>
                    <Pie
                        data={chartData}
                        dataKey="value"
                        innerRadius={30}
                        outerRadius={45}
                        startAngle={90}
                        endAngle={450}
                        data-testid="pie-chart"
                    >
                        {chartData.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={colors[index]}
                                data-testid="pie-chart"
                            />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </div>
        </div>
    );

    const totalMovies = movieItems.length;
    const totalCast = new Set(movieItems.flatMap((movie) => movie.cast)).size;
    const totalCountries = new Set(movieItems.flatMap((movie) => movie.country))
        .size;

    const generateChartData = (value) => [
        { name: "Used", value },
        { name: "Remaining", value: Math.max(100 - value, 0) },
    ];

    const cardsData = [
        {
            id: 1,
            number: totalMovies,
            title: "Total Movies",
            chartData: generateChartData(totalMovies),
            colors: ["#475be8", "#e4e8ef"], 
        },
        {
            id: 2,
            number: totalCast,
            title: "Total Cast Members",
            chartData: generateChartData(totalCast),
            colors: ["#4ce13f", "#e4e8ef"], 
        },
        {
            id: 3,
            number: totalCountries,
            title: "Total Countries",
            chartData: generateChartData(totalCountries),
            colors: ["#f29a2e", "#e4e8ef"], 
        },
    ];

    return (
        <div className="mb-6 bg-[#F7F8FA]">
            <div className="content-area-cards grid grid-cols-1 md:grid-cols-3 gap-4">
                {cardsData.map((card) => (
                    <Card
                        key={card.id}
                        number={card.number}
                        title={card.title}
                        chartData={card.chartData}
                        colors={card.colors}
                    />
                ))}
            </div>
        </div>
    );
};

export default TopArea;
