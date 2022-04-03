import React from 'react';
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className='grid justify-items-center'>
            <img src={require('../Images/notFound.png')} />
        </div>
    );
};

export default NotFound;