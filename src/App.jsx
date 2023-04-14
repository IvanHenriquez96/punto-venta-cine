import "./App.css";
import CardMovie from "./components/CardMovie";
import { movies } from "./Controllers/MoviesController";

function App() {
  //sube movies a localstorage

  if (localStorage.getItem("movies")) {
    var stock = JSON.parse(localStorage.getItem("movies"));
  } else {
    localStorage.setItem("movies", JSON.stringify(movies));

    var stock = movies;
  }

  // console.log(stock);

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
