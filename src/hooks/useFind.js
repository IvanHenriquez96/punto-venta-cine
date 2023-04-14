import { useEffect, useState } from "react";
import { movies } from "../Controllers/MoviesController";

export const useFind = (id) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    buscar(id);
    setIsLoading(false);
  }, [id]);

  const buscar = (id) => {
    if (localStorage.getItem("movies")) {
      var stock = JSON.parse(localStorage.getItem("movies"));
    } else {
      var stock = movies;
    }

    let res = stock.find((movie) => movie.id == id);
    setData(res);
    setIsLoading(false);
  };

  return { data, isLoading };
};
