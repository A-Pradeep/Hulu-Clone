import requests from "../utils/requests";
import { useRouter } from "next/router";
import { useState } from "react";

function GenreList() {
  const router = useRouter();
  const [currentGenre, setCurrentGenre] = useState("Trending");
  const handleGenreChange = (genre) => {
    router.push(`/?genre=${genre}`);
    setCurrentGenre(genre);
  };

  return (
    <nav>
      <div className="flex space-x-10 text-2xl whitespace-nowrap px-10 sm:px-20 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            onClick={() => handleGenreChange(key)}
            className={` ${
              currentGenre === key ? "text-red-300" : "text-white"
            } cursor-pointer transition duration-100 transform hover:scale-125 hover:text-red-300 active:text-red-500 last:pr-5`}
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  );
}

export default GenreList;
