import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movies } from "../Controllers/MoviesController";

const InfoMovie = () => {
  let { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieData();
  }, []);

  const getMovieData = () => {
    let search = movies.find((movie) => movie.id == id);
    setMovie(search);
  };

  return (
    <div className="grid min-h-screen App bg-slate-800 min-w-screen text-gray-50 md:grid-cols-3 md:gap-4">
      <div className="md:mx-32">
        <img src={movie.imagen} />
      </div>
      <p className="md:col-span-2">hacer un theater/movie sit picker</p>
    </div>
  );
};

export default InfoMovie;
