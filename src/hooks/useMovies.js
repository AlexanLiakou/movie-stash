import React,  {useState, useEffect} from 'react';

const useMovies = (query, apiKey, callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('false');
    
    async function fetchMovieData () {
        try {
          setIsLoading(true);
          setError('');
          const res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`);
    
          if (!res.ok) {
            throw new Error ("Something went wrong!")
          }
    
          const data = await res.json();
    
          if (data.Response === "False" ) {
            throw new Error ("No movies found!")
          }
    
          setMovies(data.Search);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      useEffect ( () => {

        if (query.length < 3) {
          setMovies([]);
          setError('');
          return;
        }
    
        callback?.();
        fetchMovieData();
      }, [query]);
    
      return {movies, isLoading, error};
}

export default useMovies;