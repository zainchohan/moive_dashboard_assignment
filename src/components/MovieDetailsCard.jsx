import React from "react";

const MovieDetailsCard = ({ movie, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
        <button className="absolute top-4 right-4 text-gray-600" onClick={onClose}>
          ✖
        </button>
        <h2 className="text-xl font-bold mb-4">{movie.title}</h2>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Year:</strong> {movie.year}</p>
        <p><strong>IMDB Rating:</strong> {movie.imdb_rating}</p>
        <p><strong>Oscar Winning:</strong> {movie.oscar_winning ? "Yes" : "No"}</p>
        <p><strong>Languages:</strong> {movie.language.join(", ")}</p>
        <p className="mt-3"><strong>Description:</strong> {movie.description}</p>
      </div>
    </div>
  );
};

export default MovieDetailsCard;
