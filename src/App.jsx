import "./App.css";
import CardMovie from "./components/CardMovie";
import { movies } from "./Controllers/MoviesController";

function App() {
  return (
    <div className="App bg-slate-800 min-h-screen min-w-screen text-gray-50">
      <div className="grid md:grid-cols-4 md:gap-8 md:mx-32 mx-4">
        {movies.map((movie) => {
          return <CardMovie key={movie.id} nombre={movie.nombre} imagen={movie.imagen} />;
        })}
      </div>
    </div>
  );
}

export default App;
