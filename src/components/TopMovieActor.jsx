import React from "react";
import { movieItems } from "../lib/data";

const TopMovieActor = () => {
    const actorOscarCount = {};

    movieItems.forEach((movie) => {
        movie.cast.forEach((actor) => {
            actorOscarCount[actor] =
                (actorOscarCount[actor] || 0) + movie.oscar_nominations;
        });
    });

    const sortedActors = Object.entries(actorOscarCount)
        .map(([actor, count]) => ({ actor, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 6);

    return (
        <div className="rounded-md shadow-lg bg-white p-4">
            <div className="mb-4">
                <h2 className="text-lg font-medium text-gray-500 mb-4">
                    Top Performers by Actors
                </h2>
            </div>
            <div className="grid gap-5">
                {sortedActors.map((progressbar, index) => (
                    <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                            <p
                                style={{ color: "#292929" }}
                                className="font-medium"
                            >
                                {progressbar.actor}
                            </p>
                            <p
                                style={{ color: "#292929" }}
                                className="font-medium"
                            >
                                {progressbar.count}
                            </p>
                        </div>
                        <div className="w-full h-2 rounded-full bg-gray-200 relative">
                            <div
                                className="absolute top-0 left-0 h-full rounded-full bg-blue-500"
                                style={{
                                    width: `${
                                        (progressbar.count /
                                            sortedActors[0].count) *
                                        100
                                    }%`,
                                }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopMovieActor;
