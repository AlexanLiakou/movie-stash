import React, { useState } from "react";
import useMovies from "./hooks/useMovies";
import useLocalStorageState from "./hooks/useLocalStorageState";
import Navbar from "./components/Navbar/NavigationBar/Navbar";
import Main from "./components/Main/Main";
import Logo from './components/Navbar/Logo/Logo';
import Search from './components/Navbar/Search/Search';
import NumResults from './components/Navbar/NumResults/NumResults';
import Box from './components/UI/Box/Box'
import MovieList from './components/MovieList/MovieList';
import WatchedSummary from './components/WatchedSummary/WatchedSummary';
import WatchedMoviesList from './components/WatchedMoviesList/WatchedMoviesList';
import Loader from "./components/UI/Loader/Loader";
import ErrorMessage from "./components/UI/ErrorMessage/ErrorMessage";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import './sass/general.scss';

const apiKey = '29114006';

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const {movies, isLoading, error} = useMovies(query, apiKey, handleSelectedMovieClose);
  const [watched, setWatched] = useLocalStorageState([], "watched");
  console.log(watched);
  const handleSelectedMovie = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };

  function handleSelectedMovieClose () {
    setSelectedId(null);
  };

  const handleAddWatched = (movie) => {
    setWatched((watched) => [...watched,movie]);
  };

  const handleDeleteWatched = (id) => {
    setWatched(watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
     <Navbar>
        <Logo/>
        <Search query={query} setQuery={setQuery}/>
        <NumResults movies={movies}/>
      </Navbar>
     <Main>
        <Box>
          {
           isLoading && <Loader/>        
          }
          {
            !isLoading && !error && <MovieList movies={movies} onSelectMovie={handleSelectedMovie}/>
          }
          {
            error && <ErrorMessage message={error}/>
          }
        </Box>
        <Box>
          {
            selectedId ?
            <MovieDetails selectedId={selectedId} onSelectedMovieClose={handleSelectedMovieClose} apiKey={apiKey} onAddWatched={handleAddWatched} watched={watched}/>
            :
            <>        
            <WatchedSummary watched={watched}/>
            <WatchedMoviesList watched={watched} onDeleteWatched={handleDeleteWatched}/>
          </>
          }
        </Box>  
      </Main>
    </>
  );
}
