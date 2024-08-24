import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassHalf,faStar,faStarHalfStroke }  from '@fortawesome/free-solid-svg-icons'

const WatchedMoviesList = ({watched, onDeleteWatched}) => {

    return (     
        <ul className="list">
            {watched.map((movie) => (
            <li key={movie.imdbID}>
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <h3>{movie.Title}</h3>
                <div>
                    <p>
                        <span><FontAwesomeIcon icon={faStar} color="#6741d9"/></span>
                        <span>{movie.imdbRating}</span>
                    </p>
                    <p>
                        <span><FontAwesomeIcon icon={faStarHalfStroke} color="#6741d9"/></span>
                        <span>{movie.rating}</span>
                    </p>
                    <p>
                        <span><FontAwesomeIcon icon={faHourglassHalf} color="#6741d9"/></span>
                        <span>{movie.runtime} min</span>
                    </p>
                    <button className='btn-delete' onClick={()=> onDeleteWatched(movie.imdbID)}>X</button>
                </div>
            </li>
            ))}
        </ul>
    );
}

export default WatchedMoviesList;