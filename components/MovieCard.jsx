import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

function MovieCard({ result: movie }) {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <div className="group p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        alt={movie.title}
        layout="responsive"
        width={1920}
        height={1080}
        src={`${baseURL}${movie.backdrop_path || movie.poster_path}`}
      />

      <div className="p-2">
        <p className="truncate max-w-md">{movie.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {movie.title || movie.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          <span className="capitalize first-letter:text-red-500">
            {movie.media_type && `${movie.media_type} .`}{" "}
          </span>
          {movie.release_date || movie.first_air_date}.{" "}
          <ThumbUpIcon className="h-5 mx-2" />
          {movie.vote_count}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
