import React, {useState} from 'react';
import WatchedMoviesList from '../WatchedMoviesList/WatchedMoviesList';
import WatchedSummary from '../WatchedSummary/WatchedSummary';

const WatchedBox = () => {
    const [isOpen2, setIsOpen2] = useState(true);
    
    return (
        <div className="box">
            <button
                className="btn-toggle"
                onClick={() => setIsOpen2((open) => !open)}
            >
                {isOpen2 ? "–" : "+"}
            </button>
            {isOpen2 && (
                <>
                <WatchedSummary/>
                <WatchedMoviesList/>
                </>
            )}
        </div>
    );
}

export default WatchedBox;