import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

// movielist - Popular
//       - MovieCard * N
// movielist - Trending
// movielist - Documentation
// movielist - For You
// movielist - Now Playing

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="md:-mt-52 mt-0 relative z-20 md:pl-12 pl-2">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.topRatedMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.upcomingMovies}
          />        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
