import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassHalf,faStar,faStarHalfStroke }  from '@fortawesome/free-solid-svg-icons'


const average = (arr) => arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const WatchedSummary= ({watched}) => {
    const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
    const avgUserRating = average(watched.map((movie) => movie.rating));
    const avgRuntime = average(watched.map((movie) => movie.runtime));

    return (     
        <div className="summary">
            <h2>Movies you watched</h2>
            <div className='summary-container'>
                <p>
                    <span>{watched.length} movies</span>
                </p>
                <p>
                    <span><FontAwesomeIcon icon={faStar} color="#6741d9"/></span>
                    <span>{avgImdbRating.toFixed(2)}</span>
                </p>
                <p>
                    <span><FontAwesomeIcon icon={faStarHalfStroke} color="#6741d9"/></span>
                    <span>{avgUserRating.toFixed(2)}</span>
                </p>
                <p>
                    <span><FontAwesomeIcon icon={faHourglassHalf} color="#6741d9"/></span>
                    <span>{avgRuntime} min</span>
                </p>
            </div>
        </div>
    );
}

export default WatchedSummary;



               