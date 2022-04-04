import React from 'react';
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className='mx-auto mt-12 md:w-1/2'>
            <img src={require('../Images/notFound.png')} />
        </div>
    );
};

export default NotFound;