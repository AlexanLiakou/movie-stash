import React, {useState} from 'react';

const Box = ({children}) => {
    const [isOpen, setIsOpen] = useState(true);
    // const [movies, setMovies] = useState(tempMovieData);
    return (     
        <div className="box">
            <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
              {isOpen ? "–" : "+"}
            </button>
            {isOpen && children}
        </div>     
    );
}

export default Box;