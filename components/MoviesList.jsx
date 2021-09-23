import MovieCard from "./MovieCard";

function MoviesList({ moviesList }) {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {moviesList.map((movie, index) => (
        <MovieCard key={index} result={movie} />
      ))}
    </div>
  );
}

export default MoviesList;
