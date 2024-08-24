import React,{useState, useEffect} from 'react';
import StarRating from '../UI/StarRating/StarRating';
import Loader from '../UI/Loader/Loader';
import './movie-details.scss';

const MovieDetails= ({selectedId, onSelectedMovieClose, apiKey, onAddWatched, watched}) => {
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [userRating, setUserRating] = useState('');

    const isWatched = watched.map((movie) => movie.imdbId).includes(selectedId);
    const watchedUserRating = watched.find(movie => movie.imdbId === selectedId)?.rating;

    async function getMovieDetails () {
        setIsLoading(true);
        const res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${selectedId}`);
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
    };

    const handleAdd = () => {
        const newWatchedMovie = {
            imdbId: selectedId,
            Title: movie.Title,
            year: movie.Released,
            Poster: movie.Poster,
            imdbRating: Number(movie.imdbRating),
            runtime: Number(movie.Runtime.split(' ').at(0)),
            rating: userRating
        };
        onAddWatched(newWatchedMovie);
        onSelectedMovieClose();
    };

    useEffect (() => {
        getMovieDetails();
    }, [selectedId]);

    useEffect (() => {
        if(!movie.Title) return;
        document.title = `Movie: ${movie.Title}`;

        return () => {
            document.title = 'usePopcorn';
        }
    }, [movie.Title]);

    useEffect (() => {
        const callback = (e)  => {
            if(e.code === 'Escape') {
                onSelectedMovieClose();
            }
        }

        document.addEventListener('keydown', callback);

        return () => {
            document.removeEventListener('keydown', callback);
        }
    }, [onSelectedMovieClose]);

    
    return (
        <div className="details">   
        {isLoading ?
            <Loader/>
        :
        <>
            <header>
                <button className='btn-back' onClick={onSelectedMovieClose}>&larr;</button>
                <img src={movie.Poster} alt={movie.Title}/>
                <div className='details-overview'>
                    <h2>{movie.Title}</h2>
                    <p>{movie.Released} &bull; {movie.Runtime}</p>
                    <p>{movie.Genre}</p>
                    <p><span>⭐</span>{movie.imdbRating} IMDB rating</p>
                </div>
            </header>
            <section>
                <div className='rating'>
                    {
                        !isWatched ?
                        <>
                            <StarRating maxRating={10} onSetRating={setUserRating}/>
                            {userRating > 0 && <button className='btn-add' onClick={handleAdd}>+ Add to list</button>}  
                        </>
                        :
                        <p>You have already rated this movie with {watchedUserRating} stars.</p>
                    }
                 
                </div>
                <p><em>{movie.Plot}</em></p>
                <p>Starring: {movie.Actors}</p>
                <p>Directed by: {movie.Director}</p>
            </section>
        </>    
    }  
        </div>
    );
}

export default MovieDetails;
