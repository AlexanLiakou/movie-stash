import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar }  from '@fortawesome/free-solid-svg-icons';
// import { imgPlaceholder }  from '../../../assets/img-placeholder.png';

const Movie= ({movie, onSelectMovie}) => {

    return (     
        <li key={movie.imdbID} onClick={() => onSelectMovie(movie.imdbID)}>
        {
            movie.Poster ?

            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            
            :

            <img src="../../../assets/img-placeholder.png" alt="not found" />
            // <p>Image not found</p>
        }
        <h3>{movie.Title}</h3>
        <div>
            <p>
            <span><FontAwesomeIcon icon={faCalendar} color="#6741d9"/></span>
            <span>{movie.Year}</span>
            </p>
        </div>
        </li>
    );
}

export default Movie;



               