import React, { useState } from "react";
import { movieItems } from "../lib/data";

const TABLE_HEADS = [
    "Title",
    "Genre",
    "Year",
    "IMDB Rating",
    "Oscar Winning",
    "Language",
    "Actions",
];
const ITEMS_PER_PAGE = 7;

const TableComponent = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedMovie, setSelectedMovie] = useState(null);

    const filteredMovies = movieItems.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredMovies.length / ITEMS_PER_PAGE);
    const currentMovies = filteredMovies.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const openMovieDetails = (movie) => {
        setSelectedMovie(movie);
    };

    const closeMovieDetails = () => {
        setSelectedMovie(null);
    };

    return (
        <section className="content-area-table bg-secondary rounded-lg shadow-light p-4 md:p-3 bg-white">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                <h2 className="text-lg font-semibold text-gray-500">
                    Serach & Filter Movies
                </h2>
                <div className="relative w-full sm:w-80">
                    <input
                        type="text"
                        placeholder="Search movies by title..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-1/2 right-3 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z"
                        />
                    </svg>
                </div>
            </div>
            <div className="overflow-x-auto border rounded-md border-tbl-border scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-scroll-track-bg">
                <div className="max-h-[300px] md:max-h-none overflow-y-auto">
                    <table className="min-w-[900px] w-full border-collapse text-inverted">
                        <thead className="text-left text-lg bg-[#f2f4ff]">
                            <tr>
                                {TABLE_HEADS.map((th, index) => (
                                    <th
                                        key={index}
                                        className="py-3 px-3 text-sm"
                                    >
                                        {th}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {currentMovies.length > 0 ? (
                                currentMovies.map((movie, index) => (
                                    <tr
                                        key={index}
                                        className="border-tbl-border"
                                    >
                                        <td className="py-2 px-2">
                                            {movie.title}
                                        </td>
                                        <td className="py-2 px-2">
                                            {movie.genre.join(", ")}
                                        </td>
                                        <td className="py-2 px-2">
                                            {movie.year}
                                        </td>
                                        <td className="py-2 px-2">
                                            {movie.imdb_rating}
                                        </td>
                                        <td className="py-2 px-2 capitalize">
                                            {movie.oscar_winning ? "Yes" : "No"}
                                        </td>
                                        <td className="py-2 px-2">
                                            {movie.language.join(", ")}
                                        </td>
                                        <td className="py-2 px-2">
                                            <button
                                                onClick={() =>
                                                    openMovieDetails(movie)
                                                }
                                                className="bg-primary text-white p-[10px] px-4 rounded-md hover:bg-primary-dark whitespace-nowrap"
                                            >
                                                View Details
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={TABLE_HEADS.length}
                                        className="py-2 px-2 text-center"
                                    >
                                        No movies found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex justify-between items-center mt-4">
                <span className="text-md text-xl-text">
                    Page {currentPage} of {totalPages}
                </span>

                <div className="flex items-center gap-2">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className={`p-2 rounded-md ${
                            currentPage === 1
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-primary hover:bg-primary-dark"
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className={`p-2 rounded-md ${
                            currentPage === totalPages
                                ? "bg-gray-300 cursor-not-allowed"
                                : "bg-primary hover:bg-primary-dark"
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            {selectedMovie && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h3 className="text-xl font-bold mb-2">
                            {selectedMovie.title}
                        </h3>
                        <p>
                            <strong>Genre:</strong>{" "}
                            {selectedMovie.genre.join(", ")}
                        </p>
                        <p>
                            <strong>Year:</strong> {selectedMovie.year}
                        </p>
                        <p>
                            <strong>IMDB Rating:</strong>{" "}
                            {selectedMovie.imdb_rating}
                        </p>
                        <p>
                            <strong>Oscar Winning:</strong>{" "}
                            {selectedMovie.oscar_winning ? "Yes" : "No"}
                        </p>
                        <p>
                            <strong>Languages:</strong>{" "}
                            {selectedMovie.language.join(", ")}
                        </p>
                        <button
                            onClick={closeMovieDetails}
                            className="mt-4 bg-red-500 text-white py-1 px-4 rounded-md hover:bg-red-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default TableComponent;
