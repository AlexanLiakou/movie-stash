import React from 'react';
import './error-message.scss';

const ErrorMessage = ({message}) => {
    return (
        <p className='error'>{message}</p>
    );
}

export default ErrorMessage