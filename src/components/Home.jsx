import React from "react";
import SideBar from "./sideBar";
import TopArea from "./TopArea";
import NomitationGraph from "./NomitationGraph";
import TopPerformers from "./TopPerformers";
import TopMovieActor from "./TopMovieActor";
import PieChartComponent from "./CountryGraph";
import TableComponent from "./TableComponent";

const Home = () => {
    return (
        <>
            <div className="min-h-screen overflow-hidden">
                <div className="flex h-full w-16 flex-col border-e bg-white fixed left-0 top-0">
                    <SideBar />
                </div>
                <div className="flex-grow bg-[#F7F8FA] flex flex-col p-10 ml-16">
                    <TopArea />
                    <div className="content-area-charts mb-6">
                        <NomitationGraph />
                        <TopMovieActor />
                    </div>
                    <div class="content-area-performace mb-6">
                        <TopPerformers />
                        <PieChartComponent />
                    </div>
                    <div>
                        <TableComponent />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
