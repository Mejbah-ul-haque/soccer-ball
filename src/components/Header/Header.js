import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h2 className='text-2xl bg-green-500 p-2 text-white font-bold'>High Quality Soccer Ball</h2>
            <nav>
                <ul>
                    <li className='flex justify-center mt-8 mb-8'>
                        <CustomLink className='mr-8' to='/'>HOME</CustomLink>
                        <CustomLink className='mr-8' to='/reviews'>REVIEWS</CustomLink>
                        <CustomLink className='mr-8' to='/dashboard'>DASHBOARD</CustomLink>
                        <CustomLink className='mr-8' to='/blogs'>BLOGS</CustomLink>
                        <CustomLink className='mr-8' to='/about'>ABOUT</CustomLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;