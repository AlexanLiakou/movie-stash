import React, {useState} from 'react';
import Star from './Star';
import './star-rating.scss';

const StarRating = ({maxRating = 5, onSetRating}) => {
    const [rating, setRating] = useState(0);
    const [tempRating, setTempRating] = useState(0);

    const handleRating = (rating) => {
        setRating(rating);
        onSetRating(rating);
    };

    return (
        <div className='star-raiting-container'>
            <div className='star-container'>
                {
                    Array.from({length:maxRating}, (_,i) => {
                        return (
                            <Star key={i} full={tempRating ? tempRating >= i+1 : rating >= i+1} onRate={() => handleRating(i + 1)}  onHoverIn={() => setTempRating(i+1)} onHoverOut={() => setTempRating(0)}/>
                        );
                    })
                }
            </div>
            <p className='rating-number'>{tempRating || rating || ''}</p>
        </div>
    );
}

export default StarRating;