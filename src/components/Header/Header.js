import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h2 className='text-4xl bg-green-500 p-4 text-white font-bold'>SOCCER BALL</h2>
            <nav className='border-b-2 border-green-500'>
                <ul>
                    <li className='flex justify-center my-5'>
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