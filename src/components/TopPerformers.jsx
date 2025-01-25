import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Legend,
} from "recharts";

import { movieItems } from "../lib/data";

const MoviesLeaderboard = () => {
    const topMovies = [...movieItems]
        .sort(
            (a, b) =>
                b.imdb_rating +
                b.oscar_nominations -
                (a.imdb_rating + a.oscar_nominations)
        )
        .slice(0, 5);

    return (
        <div>
            <div
                className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                style={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <h2 className="text-lg font-medium text-gray-500 mb-4">Top Performers by Movies</h2>
                <div
                    style={{
                        width: "100%",
                        paddingBottom: "1rem",
                    }}
                >
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart
                            layout="vertical"
                            data={topMovies}
                            margin={{
                                top: 0,
                                right: 0,
                                left: 0,
                                bottom: 0,
                            }}
                            barCategoryGap="20%"
                        >
                            <XAxis type="number" />
                            <YAxis
                                type="category"
                                dataKey="title"
                                width={120}
                                tick={{ fontSize: 12 }}
                            />
                            <Tooltip
                                cursor={false}
                                contentStyle={{
                                    backgroundColor: "white",
                                    border: "1px solid #ddd",
                                }}
                            />
                            <Legend />
                            <Bar
                                dataKey="imdb_rating"
                                stackId="a"
                                fill="#475be8"
                                activeBar={false}
                                isAnimationActive={false}
                                barSize={24}
                                name="IMDb Rating"
                            />
                            <Bar
                                dataKey="oscar_nominations"
                                stackId="a"
                                fill="#e3e7fd"
                                name="Oscar Nominations"
                                activeBar={false}
                                isAnimationActive={false}
                                barSize={24}
                                radius={[0, 4, 4, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default MoviesLeaderboard;
