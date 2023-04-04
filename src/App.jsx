import "./App.css";
import CardMovie from "./components/CardMovie";
import { movies } from "./Controllers/MoviesController";

function App() {
  return (
    <div className="min-h-screen App bg-slate-800 min-w-screen text-gray-50">
      <div className="grid mx-4 md:grid-cols-4 md:gap-8 md:mx-32">
        {movies.map((movie) => {
          return <CardMovie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
