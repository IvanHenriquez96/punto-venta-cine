import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movies } from "../Controllers/MoviesController";
import Seat from "../components/Seat";

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
        <img className="w-3/4 mx-auto my-10 md:w-full" src={movie.imagen} />
      </div>
      <div className="md:col-span-2">
        <div className="w-full min-h-screen p-1 bg-gray-600 md:p-5">
          <div className="grid grid-cols-12 p-4">
            <div className="border">
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
            </div>
            <div className="border">
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
            </div>
            <ul></ul>
            <div className="border">
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
            </div>
            <div className="border">
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
            </div>
            <div className="border">
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
            </div>
            <div className="border">
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
            </div>
            <div className="border">
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
            </div>
            <div className="border">
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
            </div>
            <ul></ul>
            <div className="border">
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
            </div>
            <div className="border">
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
              <Seat />
            </div>
          </div>

          <div
            className="h-20 mx-auto mt-5 bg-white w-4/4"
            style={{ transform: "perspective(100px) rotateX(3deg)" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default InfoMovie;
