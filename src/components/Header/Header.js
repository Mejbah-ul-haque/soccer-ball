import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <h2 className='text-4xl bg-green-500 p-4 text-white font-bold '>SOCCER BALL</h2>
            <nav className='border-b-2 border-green-500'>
                <div onClick={() => setOpen(!open)} className='w-6 h-6 md:hidden'>
                    {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                </div>
                <ul className={`md:flex justify-center bg-white my-4 w-full md:static absolute duration-500 ease-in ${open ? 'top-20' : 'top-[-140px]'}`}>

                    <CustomLink className='mr-8' to='/'>HOME</CustomLink>
                    <CustomLink className='mr-8' to='/reviews'>REVIEWS</CustomLink>
                    <CustomLink className='mr-8' to='/dashboard'>DASHBOARD</CustomLink>
                    <CustomLink className='mr-8' to='/blogs'>BLOGS</CustomLink>
                    <CustomLink className='mr-8' to='/about'>ABOUT</CustomLink>

                </ul>
            </nav>
        </div>
    );
};

export default Header;