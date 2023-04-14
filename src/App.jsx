import "./App.css";
import CardMovie from "./components/CardMovie";
import { movies } from "./Controllers/MoviesController";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { cerrar_menu, cerrar_popover } from "./features/menu/menuSlice";

function App() {
  const dispatch = useDispatch();
  //sube movies a localstorage

  useEffect(() => {
    dispatch(cerrar_menu());
    dispatch(cerrar_popover());
  }, []);

  if (localStorage.getItem("movies")) {
    var stock = JSON.parse(localStorage.getItem("movies"));
  } else {
    localStorage.setItem("movies", JSON.stringify(movies));

    var stock = movies;
  }

  return (
    <div className="min-h-screen App bg-slate-800 min-w-screen text-gray-50 fade-in">
      <div className="grid mx-4 md:grid-cols-4 md:gap-8 md:mx-32">
        {stock.map((movie) => {
          return <CardMovie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
