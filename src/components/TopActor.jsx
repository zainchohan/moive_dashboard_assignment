import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { movieItems } from "../lib/data";

const TopPerformersChart = () => {
  const castPerformance = movieItems.reduce((acc, movie) => {
    movie.cast.forEach((actor) => {
      if (!acc[actor]) {
        acc[actor] = {
          actor,
          imdb_rating: movie.imdb_rating,
          oscar_nominations: movie.oscar_nominations,
        };
      } else {
        acc[actor].imdb_rating += movie.imdb_rating;
        acc[actor].oscar_nominations += movie.oscar_nominations;
      }
    });
    return acc;
  }, {});

  const topPerformers = Object.values(castPerformance)
    .sort((a, b) => b.imdb_rating - a.imdb_rating)
    .slice(0, 5);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Top 5 Performers (Cast)</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          layout="vertical"
          data={topPerformers}
          margin={{
            top: 20,
            right: 30,
            left: 50,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="actor" width={150} />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="imdb_rating"
            fill="rgba(75, 192, 192, 0.8)"
            name="IMDb Rating"
          />
          <Bar
            dataKey="oscar_nominations"
            fill="rgba(153, 102, 255, 0.8)"
            name="Oscar Nominations"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopPerformersChart;
